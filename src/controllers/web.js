import {HandleCreateUser, GetListOrderDetails, UpdateOrderDetails, HandleGetListUser, HandleGetListAdmin, HandleCreateAdmin, HandleGetListProducts, HandleGetInforProduct, HandleOrder, RemoveOrderDetailsDB, HandleLoginUser, UpdateOrder} from "../services/Service"


const HelloWorld =(req, res)=>{
    return res.send("<h1>Hello World<h1/>");
}

const HomePage =(req, res)=>{
    console.log(req.session);
    return res.render("home", {layout:'layout', user:req.session});
}

const ShopPage = async(req, res)=>{
    let products = await HandleGetListProducts();
    return res.render("shop", {layout:'layout', Products:products, user:req.session});
}

const RegisterPage =(req, res)=>{
    return res.render("register", {layout:'layout', user:req.session});
}

const LoginPage =(req, res)=>{
    return res.render("login", {layout:'layout', user:req.session});
}

const BlogPage =(req, res) =>{
    return res.render("blog", {layout:'layout', user:req.session});
}

const CartPage = async(req, res) =>{
    try {
        let email = req.session.email;
        if(email){
            let listOrderDetails = await GetListOrderDetails(email);
            // console.log(listOrderDetails);
            return res.render("cart", {layout:'layout', listOrderDetails:listOrderDetails, user:req.session});
        }else{
            res.redirect("/login");
        }

    } catch (error) {
        console.log(error);
    }
   
}

const RegisterUser = async(req, res) =>{
    let {email, name, password} = req.body;
    let result = await HandleCreateUser(email, name, password);
    return res.redirect("/login");
}

const ProductDetails = async (req, res)=>{
    let id = req.params.Id;
    let product = await HandleGetInforProduct(id);
    return res.render("product_details", {layout:'layout', product:product, user:req.session});
}

const CreateOrder = async (req, res) =>{
    let user_id = req.session.Id;
    let id = req.params.Id;
    let number = req.body.number_product
    await HandleOrder(
        user_id,
        null,
        id,
        number
    )
    console.log("check id >>> ", id);
    console.log("request body >>>", req.body);
    return res.redirect("/product_details/"+id);
}

const RemoveOrderDetail = async (req, res)=>{
    let id = req.params.Id;
    await RemoveOrderDetailsDB(id);
    return res.redirect("/cart");
}

const UpdateOrderQuantity = async (req, res) =>{
    let number = req.body.number;
    let id = req.params.Id;
    await UpdateOrderDetails(id, number);
    return res.redirect("/cart");
}

const CheckoutOrder = (req, res) =>{
    let name = req.session.name;
    let email = req.session.email;
    return res.render("checkout", {layout:"layout", user:req.session, email:email, name:name});
}

const SubmitOrder = async(req, res) =>{
    let user_id = req.session.Id;
    let address = req.body.c_address;
    await UpdateOrder(user_id, address);
    return res.redirect('/home');
}

const LoginUser = async (req, res)=>{
    let {email, password} = req.body;
    let checklogin = await HandleLoginUser(email, password);
    if(checklogin){
        req.session.Id = checklogin.id; 
        req.session.email = email; // Lưu thông tin người dùng vào session
        req.session.name = checklogin.name;
        console.log(req.session.email);
        console.log(req.session);
        return res.redirect('/home'); // Chuyển hướng về trang chính
    }
    
}

const LogoutUser = async (req, res)=>{
    req.session.destroy(err => {
        if (err) {
          return res.send('Không thể đăng xuất');
        }
        res.clearCookie('connect.sid');
        res.redirect('/home');
      });
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
    CreateOrder,
    RemoveOrderDetail,
    UpdateOrderQuantity,
    CheckoutOrder, 
    LoginUser,
    LogoutUser, 
    SubmitOrder
}