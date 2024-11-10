const authAdminLogin =(req, res, next) =>{
    const openRoutes = ['/admin', "/login-admin"];
    if (openRoutes.includes(req.path)) return next();
    if(req.session.name && req.session.role){
        next();
    }else{
        return res.redirect("/admin");
    }
}



module.exports = {
    authAdminLogin, 
}