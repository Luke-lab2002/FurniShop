import {HandleCreateUser, HandleGetListUser, HandleGetListAdmin} from "../services/admin"



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
    res.redirect("/admin-users");
}



module.exports = {
    AdminPage,
    AdminUserPage,
    CreateUser,
    AdminAdminsPage
}