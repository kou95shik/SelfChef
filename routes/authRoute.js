import express from "express";
import {registerController, logincontroller} from "../controller/authController.js";

//router object
const router = express.Router();

//Routing
//RIGISTER || METHOD POST
router.post('/register', registerController);

//login || post
router.post('/login', logincontroller)

export default router