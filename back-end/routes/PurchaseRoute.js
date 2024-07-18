import express from "express";
import { purchase } from "../controllers/PurchaseController.js";

const PurchaseRouter = new express.Router();

PurchaseRouter.post("/", purchase);

export default PurchaseRouter;