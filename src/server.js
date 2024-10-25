import express from "express";
import configViewEngine from "./config/configViewEngine";
import InitRouter from "./routes/users";
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

configViewEngine(app);
InitRouter(app)


app.listen(PORT, ()=>{
    console.log("Running backend by PORT", PORT);
})