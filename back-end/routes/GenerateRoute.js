import express from 'express';
import { sendImgRequest2 } from '../controllers/GenerateController.js';

const GenerateRouter = new express.Router();

GenerateRouter.post("/", sendImgRequest2);

export default GenerateRouter;