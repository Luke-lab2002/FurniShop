import {HandleCreateUser,
     HandleGetListUser, 
     HandleGetListAdmin, 
     HandleCreateAdmin, 
     HandleDeleteUser, 
     CreateProducts, 
     HandleGetListProducts, 
     HandleDeleteProduct,
     HandleDeleteAdmin, 
     HandleCreateArticle, 
     HandleGetListArticles, 
     HandleGetInforProduct, 
     HandleUpdateProduct,
     HandleLoginAdmin
    } from "../services/Service"


// Admin and user
const AdminPage =(req, res) =>{
    if(req.session.role){
        let admin = req.session;
        return res.render("admin", {layout:'admin_layout', admin:admin});
    }
    else{
        return res.render("admin_login",{layout:"empty_layout"});
    }

}

const LoginAdmin = async (req, res)=>{
    let {email, password} = req.body;
    let checklogin = await HandleLoginAdmin(email, password);
    if(checklogin){
        req.session.Id = checklogin.id; 
        req.session.email = email; // Lưu thông tin người dùng vào session
        req.session.name = checklogin.name;
        req.session.role = "admin"
        console.log(req.session.email);
        console.log(req.session);
        return res.redirect('/admin'); // Chuyển hướng về trang chính
    }
    
}

const AdminLogOut = (req, res)=>{
    req.session.destroy(err => {
        if (err) {
          return res.send('Không thể đăng xuất');
        }
        res.clearCookie('connect.sid');
        res.redirect('/admin');
      });
}

const AdminUserPage = async (req, res) =>{
    let admin = req.session;
    let users = await HandleGetListUser();
    // users.forEach(element => {
    //     console.log(element.name);
    // });
    return res.render("admin_users_page", {layout:'admin_layout', users:users, admin:admin});
}

const AdminAdminsPage = async (req, res) =>{
    let admin = req.session;
    let listAdmin = await HandleGetListAdmin();
    return res.render("admin_admins_page", {layout:'admin_layout', admins:listAdmin, admin:admin});
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

// Product
const DeleteProduct = async(req, res) =>{
    let id = req.params.Id;
    await HandleDeleteProduct(id);
    console.log("check id >>",id);
    return res.redirect("/admin-products");
}


const AdminProductsPage = async (req, res)=>{
    let admin = req.session;
    let listProucts = await HandleGetListProducts();
    return res.render("admin_products_page", {layout:'admin_layout', Products:listProucts, admin:admin});

}

const AdminCreateProduct = async (req, res)=>{
    let {name, price, code} = req.body;
    let path_img = "uploads" +"/" + req.file.filename;
    await CreateProducts(name, price, code, path_img);
    return res.redirect("/admin-products");
}

const AdminUpdateProductForm = async (req, res)=>{
    let admin = req.session;
    let id = req.params.Id;
    let protduct = await HandleGetInforProduct(id);
    return res.render("admin_updateProductpage.ejs", {layout:'admin_layout', product:protduct, admin:admin});
}

const AdminUpdateProduct = async (req, res)=>{
    let id = req.params.Id;
    let {name, price, code} = req.body;
    if(req.file){
        let path_img = "uploads" +"/" + req.file.filename;
        await HandleUpdateProduct(id,name, price, code, path_img);
    }else{
        await HandleUpdateProduct(id,name, price, code);
    }
    return res.redirect("/admin-products");
}


//blog
const AdminBlogPage = async (req, res)=>{
    let admin = req.session;
    let listArticles = await HandleGetListArticles()
    return res.render("admin_blog_page", {layout:'admin_layout', Articles:listArticles, admin:admin});
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
    CreateArticle,
    AdminUpdateProductForm,
    AdminUpdateProduct,
    LoginAdmin,
    AdminLogOut
}