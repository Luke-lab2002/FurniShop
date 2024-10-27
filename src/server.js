import express from "express";
import expressLayouts from 'express-ejs-layouts';
import configViewEngine from "./config/configViewEngine";
import InitRouter from "./routes/web";
import ConnectDB from "./config/connectDB";


require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();
ConnectDB();

configViewEngine(app);
app.use(expressLayouts);
InitRouter(app);


app.listen(PORT, ()=>{
    console.log("Running backend by PORT", PORT);
})