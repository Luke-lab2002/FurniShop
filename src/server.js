import express from "express";
import expressLayouts from 'express-ejs-layouts';
import bodyParser from "body-parser";
import configViewEngine from "./config/configViewEngine";
import InitRouter from "./routes/web";
import InitRouterAdmin from "./routes/admin";
import ConnectDB from "./config/connectDB";


require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();
ConnectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

configViewEngine(app);
app.use(expressLayouts);
InitRouterAdmin(app);
InitRouter(app);


app.listen(PORT, ()=>{
    console.log("Running backend by PORT", PORT);
})