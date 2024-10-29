const AdminPage =(req, res) =>{
    return res.render("admin", {layout:'admin_layout'});
}

module.exports = {
    AdminPage
}