import { AdminPage, AdminUserPage, CreateUser, AdminAdminsPage, CreateAdmin, DeleteUser } from "../controllers/admin";
import express from "express";

const router = express.Router();

const InitRouterAdmin = (app) =>{
    router.get("/admin", AdminPage);
    router.get("/admin-users", AdminUserPage);
    router.get("/admin-admins", AdminAdminsPage);

    router.post("/admin-createuser", CreateUser);
    router.post("/admin-create-admin", CreateAdmin);
    router.post("/delete-user/:Id", DeleteUser)

    return app.use("/", router);
}

export default InitRouterAdmin;