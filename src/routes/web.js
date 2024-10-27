import express from "express";
import { HelloWorld, HomePage, HandleRegister, ShopPage} from "../controllers/web";

const router = express.Router();

const InitRouter = (app) =>{
    // router.get("/", HelloWorld);
    router.get("/home", HomePage);
    router.get("/register", HandleRegister);
    router.get("/shop", ShopPage);


    return app.use("/", router);
}

export default InitRouter;