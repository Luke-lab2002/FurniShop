import express from "express";
import { HelloWorld, 
    HomePage, 
    RegisterPage, 
    ShopPage, 
    LoginPage, 
    BlogPage, 
    CartPage,
    RegisterUser, 
    ProductDetails, 
    CreateOrder, 
    RemoveOrderDetail, 
    UpdateOrderQuantity,
    CheckoutOrder,
    LoginUser,
    LogoutUser,
    SubmitOrder
} from "../controllers/web";

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
    router.post("/create_order_details/:Id", CreateOrder);
    router.post("/delete_order_details/:Id", RemoveOrderDetail);
    router.post("/update-order-quantity/:Id", UpdateOrderQuantity);
    router.get("/checkout_product", CheckoutOrder);
    router.post("/login_user", LoginUser);
    router.post("/logout_user", LogoutUser);
    router.post("/place_order", SubmitOrder)

    return app.use("/",router);
}


export default InitRouter;