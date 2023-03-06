import jwt from "jsonwebtoken";
import exceptionPaths from "./exceptionPaths";

async function checkToken(req, res, next) {
  const currentPath = req.path;
  if (exceptionPaths.includes(currentPath)) {
    return next();
  }
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ message: "Please login to access the data" });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      res.status(401);
      return res.end();
    }
    return next(error.message);
  }
}

export default checkToken;
