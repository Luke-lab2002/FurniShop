
const HelloWorld =(req, res)=>{
    return res.send("<h1>Hello World<h1/>");
}

const HomePage =(req, res)=>{
    return res.render("home");
}


module.exports ={
    HelloWorld,
    HomePage
}