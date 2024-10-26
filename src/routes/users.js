import express from "express";
import { HelloWorld, HomePage } from "../controllers/users";

const router = express.Router();

const InitRouter = (app) =>{
    // router.get("/", HelloWorld);
    router.get("/", HomePage);


    return app.use("/", router);
}

export default InitRouter;