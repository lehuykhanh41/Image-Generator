import express from "express";
import { login, logout, signUp } from "../controllers/AccountController.js";

const AccRouter = new express.Router();

AccRouter.post("/register", signUp);
AccRouter.post("/login", login);
AccRouter.post("/logout", logout);

export default AccRouter;