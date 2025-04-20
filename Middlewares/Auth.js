import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const isAuthenticated = async (req, res, next) => {
    const token = req.header('Auth');
    // console.log("Cheking token = ", token)
    if (!token) return res.json({ message: "Login first...!   " })
    const decoded = jwt.verify(token, process.env.JWT);
    console.log("token data = ", decoded)
    const id = decoded.userId;

    let user = await User.findById(id);
    if (!user) res.json({ message: "user not foun....!" });
    req.user = user;
    next()
}