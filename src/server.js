import express from "express";
import expressLayouts from 'express-ejs-layouts';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import session from "express-session";
import configViewEngine from "./config/configViewEngine";
import InitRouter from "./routes/web";
import InitRouterAdmin from "./routes/admin";
import ConnectDB from "./config/connectDB";


require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();
ConnectDB();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: process.env.secret_key, // thay bằng secret của bạn
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // để `false` nếu không dùng HTTPS
  }));

configViewEngine(app);
app.use(expressLayouts);
InitRouter(app);
InitRouterAdmin(app);

app.listen(PORT, ()=>{
    console.log("Running backend by PORT", PORT);
})