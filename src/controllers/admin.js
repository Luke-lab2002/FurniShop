import {HandleCreateUser, HandleGetListUser, HandleGetListAdmin, HandleCreateAdmin, HandleDeleteUser, CreateProducts, HandleGetListProducts, HandleDeleteProduct,
    HandleDeleteAdmin, HandleCreateArticle, HandleGetListArticles} from "../services/Service"



const AdminPage =(req, res) =>{
    return res.render("admin", {layout:'admin_layout'});
}

const AdminUserPage = async (req, res) =>{
    let users = await HandleGetListUser();
    // users.forEach(element => {
    //     console.log(element.name);
    // });
    return res.render("admin_users_page", {layout:'admin_layout', users:users});
}

const AdminAdminsPage = async (req, res) =>{
    let listAdmin = await HandleGetListAdmin();
    return res.render("admin_admins_page", {layout:'admin_layout', admins:listAdmin});
}

const CreateUser = async(req, res) =>{
    let {email, name, password} = req.body;
    let result = await HandleCreateUser(email, name, password);
    console.log(result);
    return res.redirect("/admin-users");
}

const CreateAdmin = async(req, res) =>{
    let {email, name, password} = req.body;
    let result = await HandleCreateAdmin(email, name, password);
    console.log(result);
    return res.redirect("/admin-admins");
}

const DeleteUser = async(req, res) =>{
    let id = req.params.Id;
    await HandleDeleteUser(id);
    console.log("check id >>",id);
    return res.redirect("/admin-users");
}

const DeleteAdmin = async(req, res) =>{
    let id = req.params.Id;
    await HandleDeleteAdmin(id);
    console.log("check id >>",id);
    return res.redirect("/admin-admins");
}

const DeleteProduct = async(req, res) =>{
    let id = req.params.Id;
    await HandleDeleteProduct(id);
    console.log("check id >>",id);
    return res.redirect("/admin-products");
}



const AdminProductsPage = async (req, res)=>{
    let listProucts = await HandleGetListProducts();
    return res.render("admin_products_page", {layout:'admin_layout', Products:listProucts});

}

const AdminCreateProduct = async (req, res)=>{
    let {name, price, code} = req.body;
    let path_img = "uploads" +"/" + req.file.filename;
    await CreateProducts(name, price, code, path_img);
    return res.redirect("/admin-products");
}

const AdminBlogPage = async (req, res)=>{
    let listArticles = await HandleGetListArticles()
    return res.render("admin_blog_page", {layout:'admin_layout', Articles:listArticles})
}

const CreateArticle = async (req, res) =>{
    let {title, content} = req.body;
    let path_img = "uploads" +"/" + req.file.filename;
    await HandleCreateArticle(title, content, path_img);
    return res.redirect("/admin-blog");
}

module.exports = {
    AdminPage,
    AdminUserPage,
    CreateUser,
    AdminAdminsPage,
    CreateAdmin,
    DeleteUser,
    AdminProductsPage,
    AdminCreateProduct,
    DeleteProduct,
    DeleteAdmin,
    AdminBlogPage,
    CreateArticle
}