import express from "express";
import { HelloWorld, HomePage, RegisterPage, ShopPage, LoginPage, BlogPage, CartPage} from "../controllers/web";

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


export default InitRouter;