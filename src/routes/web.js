import express from "express";
import { HelloWorld, HomePage, RegisterPage, ShopPage, LoginPage, BlogPage, CartPage, AdminPage} from "../controllers/web";

const router = express.Router();

const InitRouter = (app) =>{
    // router.get("/", HelloWorld);
    router.get("/home", HomePage);
    router.get("/register", RegisterPage);
    router.get("/shop", ShopPage);
    router.get("/login", LoginPage);
    router.get("/blog", BlogPage);
    router.get("/cart", CartPage);



    return app.use("/", router);
}

const InitRouterAdmin = (app) =>{
    router.get("/", AdminPage);


    return app.use("/admin", router);
}

module.exports = { InitRouter, InitRouterAdmin};