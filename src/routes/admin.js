import { AdminPage } from "../controllers/admin";
import express from "express";

const router = express.Router();

const InitRouterAdmin = (app) =>{
    router.get("/", AdminPage);


    return app.use("/admin", router);
}

export default InitRouterAdmin;