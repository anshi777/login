import bcrypt from "bcryptjs";
import User from "../model/userModel.js";
import * as jwt from "../utils/jwtUtils.js";

export const registerUser = async (userData) => {
  const { name, email, password, dateOfBirth, role, status } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    dateOfBirth,
    role,
    status,
  });
  return await newUser.save();
};

export const loginUser = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.generateToken({ id: user._id });
  return { user: { name: user.name, email: user.email }, token };
};

export const forgotPassword = async (email) => {
  return `Password reset link sent to ${email}`;
};

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
