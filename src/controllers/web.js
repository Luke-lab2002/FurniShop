
const HelloWorld =(req, res)=>{
    return res.send("<h1>Hello World<h1/>");
}

const HomePage =(req, res)=>{
    return res.render("home", {layout:'layout'});
}

const ShopPage =(req, res)=>{
    return res.render("shop", {layout:'layout'});
}

const RegisterPage =(req, res)=>{
    return res.render("register", {layout:'layout'});
}

const LoginPage =(req, res)=>{
    return res.render("login", {layout:'layout'});
}

const BlogPage =(req, res) =>{
    return res.render("blog", {layout:'layout'});
}

const CartPage =(req, res) =>{
    return res.render("cart", {layout:'layout'});
}

const AdminPage =(req, res) =>{
    return res.render("admin", {layout:'admin_layout'});
}

module.exports ={
    HelloWorld,
    HomePage,
    RegisterPage,
    ShopPage,
    LoginPage,
    BlogPage,
    CartPage,
    AdminPage
}