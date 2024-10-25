import express from "express";
import { HelloWorld } from "../controllers/users";

const router = express.Router();

const InitRouter = (app) =>{
    router.get("/", HelloWorld);


    return app.use("/", router);
}

export default InitRouter;