import models from "../db/models";
const { User } = models;
import bcrypt from "bcrypt";

const validateUserInfo = async (email, password) => {
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }
    throw Error("Invalid password!");
  }
  throw Error("Invalid email!");
};

export default {
  validateUserInfo,
};
