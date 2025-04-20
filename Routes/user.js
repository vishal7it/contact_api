import express from "express";
import { login, register } from "../Controllers/user.js";

const router = express.Router();

//user register
//@api dsc :- user register
//@api method :- post
//@api endpoint :-.api/user/register

router.post('/register', register)

//user login
//@api dsc :- user login
//@api method :- post
//@api endpoint :-.api/user/login

router.post('/login', login)

export default router