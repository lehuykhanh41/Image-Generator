import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import mongoConnect from "./dbConnect/dbConnect.js";
import AccRouter from "./routes/AccountRoutes.js";
import PurchaseRouter from "./routes/PurchaseRoute.js";
import GenerateRouter from "./routes/GenerateRoute.js";
import path from "path"

const app = express();



dotenv.config();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/account", AccRouter);
app.use("/api/purchase", PurchaseRouter);
app.use("/api/create", GenerateRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/front-end/dist")));
app.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname, "front-end", "dist", "index.html"));
})

app.listen(PORT, ()=>{
    mongoConnect();
    console.log("Server is listening at PORT", PORT);
})

