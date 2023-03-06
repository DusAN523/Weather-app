import encryptionService from "../../services/encryptionService";
import createToken from "../../services/createToken";

const post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await encryptionService.validateUserInfo(email, password);
    res.status(200);
    const token = createToken.createToken(user);
    res.json(token);
  } catch (error) {
    return res.status(400).json({ message: "Invalid email or password !" });
  }
};

export default {
  post,
};
