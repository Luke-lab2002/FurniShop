import { AdminPage, AdminUserPage, CreateUser, AdminAdminsPage } from "../controllers/admin";
import express from "express";

const router = express.Router();

const InitRouterAdmin = (app) =>{
    router.get("/admin", AdminPage);
    router.get("/admin-users", AdminUserPage);
    router.get("/admin-admins", AdminAdminsPage);



    router.post("/admin-createuser", CreateUser)

    return app.use("/", router);
}

export default InitRouterAdmin;