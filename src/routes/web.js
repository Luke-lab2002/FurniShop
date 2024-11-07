import express from "express";
import { HelloWorld, HomePage, RegisterPage, ShopPage, LoginPage, BlogPage, CartPage, RegisterUser, ProductDetails, CreateOrder} from "../controllers/web";

const router = express.Router();

const InitRouter = (app) =>{
    // router.get("/", HelloWorld);
    router.get("/home", HomePage);
    router.get("/register", RegisterPage);
    router.get("/shop", ShopPage);
    router.get("/login", LoginPage);
    router.get("/blog", BlogPage);
    router.get("/cart", CartPage);
    router.get("/product_details/:Id", ProductDetails);
    router.post("/registerUser",RegisterUser);
    router.post("/create_order_details/:Id", CreateOrder)


    return app.use("/", router);
}


export default InitRouter;