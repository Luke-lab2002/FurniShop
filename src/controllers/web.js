import {HandleCreateUser, HandleGetListUser, HandleGetListAdmin, HandleCreateAdmin, HandleGetListProducts, HandleGetInforProduct, HandleOrder} from "../services/Service"


const HelloWorld =(req, res)=>{
    return res.send("<h1>Hello World<h1/>");
}

const HomePage =(req, res)=>{
    return res.render("home", {layout:'layout'});
}

const ShopPage = async(req, res)=>{
    let products = await HandleGetListProducts();
    return res.render("shop", {layout:'layout', Products:products});
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

const RegisterUser = async(req, res) =>{
    let {email, name, password} = req.body;
    let result = await HandleCreateUser(email, name, password);
    return res.redirect("/login");
}

const ProductDetails = async (req, res)=>{
    let id = req.params.Id;
    let product = await HandleGetInforProduct(id);
    return res.render("product_details", {layout:'layout', product:product});
}

const CreateOrder = async (req, res) =>{
    let id = req.params.Id;
    let number = req.body.number_product
    await HandleOrder(
        null,
        null,
        id,
        number
    )
    console.log("check id >>> ", id);
    console.log("request body >>>", req.body);
    return res.redirect("/product_details/"+id);
}




module.exports ={
    HelloWorld,
    HomePage,
    RegisterPage,
    ShopPage,
    LoginPage,
    BlogPage,
    CartPage,
    RegisterUser,
    ProductDetails,
    CreateOrder
}