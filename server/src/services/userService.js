import models from "../db/models";
import bcrypt from "bcrypt";
const { User } = models;

const createUser = async (details) => {
  const email = details.email;
  try {
    validateUserCredentials(details);
  } catch (error) {
    return { error: true, message: error.message };
  }
  const userFromDB = await User.findOne({
    where: {
      email: email,
    },
  });
  if (userFromDB) {
    return { error: true, message: "Email already exists" };
  } else {
    details.password = await bcrypt.hash(details.password, 10);
    try {
      await User.create(details);
      return { error: false, message: "User created successfully" };
    } catch (error) {
      return { error: true, message: { error } };
    }
  }
};

function validateUserCredentials(credentials) {
  const email = credentials.email;
  const password = credentials.password;

  if (!email || !password) {
    throw new Error("All fields are required");
  }
  if (!email.includes("@")) {
    throw new Error("Email must be valid email");
  }
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  if (!password.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number");
  }
}

export default {
  validateUserCredentials,
  createUser,
};
