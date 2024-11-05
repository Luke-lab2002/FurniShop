import {AdminPage, 
        AdminUserPage, 
        CreateUser, 
        AdminAdminsPage, 
        CreateAdmin, 
        DeleteUser, 
        AdminProductsPage, 
        AdminCreateProduct,
        DeleteAdmin, 
        DeleteProduct, 
        AdminBlogPage, 
        CreateArticle,
        AdminUpdateProductForm,
        AdminUpdateProduct
} from "../controllers/admin";
import express from "express";
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/views/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


const InitRouterAdmin = (app) =>{
    router.get("/admin", AdminPage);
    router.get("/admin-users", AdminUserPage);
    router.get("/admin-admins", AdminAdminsPage);
    router.get("/admin-products",AdminProductsPage);
    router.get("/admin-blog",AdminBlogPage);

    router.post("/admin-createuser", CreateUser);
    router.post("/admin-create-admin", CreateAdmin);
    router.post("/delete-user/:Id", DeleteUser);
    router.post("/admin-create-product",upload.single('image'), AdminCreateProduct);
    router.post("/delete-admin/:Id", DeleteAdmin);
    router.post("/delete-product/:Id", DeleteProduct);
    router.get("/update-product-form/:Id", AdminUpdateProductForm);
    router.post("/update-product/:Id",upload.single('image'), AdminUpdateProduct);

    router.post("/admin-create-article",upload.single('image'), CreateArticle);


    return app.use("/", router);
}

export default InitRouterAdmin;