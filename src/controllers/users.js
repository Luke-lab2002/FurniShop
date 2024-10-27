
const HelloWorld =(req, res)=>{
    return res.send("<h1>Hello World<h1/>");
}

const HomePage =(req, res)=>{
    return res.render("home");
}

const HandleRegister =(req, res)=>{
    return res.render("register");
}

module.exports ={
    HelloWorld,
    HomePage,
    HandleRegister
}