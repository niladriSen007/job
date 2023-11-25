import bcrypt from "bcrypt";
import { UserDetails } from "../models/userDetails.js";
export const hashedPasswordGenerator = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    return hashedPass;
  } catch (e) {
    console.log(e);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const matchingPass = await bcrypt.compare(password, hashedPassword);
    return matchingPass;
  } catch (e) {
    console.log(e);
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, isAdmin } = req.body;
    if (!name || !email || !password) {
      return res.json({ Error: "Please enter all values" });
    }
    if (password !== confirmPassword) {
      return res.json({ Error: "Please enter correct password" });
    }

    const hashedPassword = await hashedPasswordGenerator(password);

    const newUser = new UserDetails({
      name,
      email,
      password: hashedPassword,
      confirmPassword,
    });

    await newUser.save();

    return res.json({ user: newUser });
  } catch (e) {
    console.log(e);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ Error: "Please enter all values" });
    }
    
    const userExistOrNot = await UserDetails.findOne({ email });
    if (!userExistOrNot) return res.json({ Error: "No user exists" });
    console.log(userExistOrNot?.password)
    const passwordMatch = await comparePassword(password,userExistOrNot?.password)
    if(passwordMatch)
        return res.json({ user: userExistOrNot });
    else
        return res.json({ Error : "Please enter correct credentials" });
  } catch (e) {
    console.log(e);
  }
};
