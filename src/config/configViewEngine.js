import express from "express";
import expressLayouts from 'express-ejs-layouts';

const configViewEngine = (app) =>{
    app.use(expressLayouts);
    app.use(express.static("src/views"));
    app.set("view engine", 'ejs');
    app.set("views", "./src/views");

}

export default configViewEngine;