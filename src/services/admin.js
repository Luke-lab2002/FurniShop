import db from "../models";
const bcrypt = require('bcrypt');


const saltRounds = 10;
const banUser = false;



const HandleCreateUser = async(email, name, password) =>{
    try {
        let checkEmail = await db.Users.findOne({ where: { email: email } });
        let passwordhashed = bcrypt.hashSync(password, saltRounds);
        if(checkEmail != null){
            return {"message":"email đã tồn tại trong hệ thống!"};
        }else {        
            const newUser = await db.Users.create({ 
            email: email, 
            name: name, 
            password: passwordhashed,
            ban:banUser
         });
    
        return newUser.name;  }
      
    } catch (error) {
        console.log(error);
    }
}

const HandleCreateAdmin = async(email, name, password) =>{
    try {
        let checkEmail = await db.Admin.findOne({ where: { email: email } });
        let passwordhashed = bcrypt.hashSync(password, saltRounds);
        if(checkEmail != null){
            return {"message":"email đã tồn tại trong hệ thống!"};
        }else {        
            const newUser = await db.Admin.create({ 
            email: email, 
            name: name, 
            password: passwordhashed,
         });
    
        return newUser.name;  }
      
    } catch (error) {
        console.log(error);
    }

}

const HandleGetListUser = async() =>{
    try {
        let ListUsers = await db.Users.findAll();
        // console.log(ListUsers)
        return ListUsers

    } catch (error) {
        console.log(error);
    }
}

const HandleGetListAdmin = async() =>{
    try {
        let ListAdmin = await db.Admin.findAll();
        // console.log(ListUsers)
        return ListAdmin

    } catch (error) {
        console.log(error);
    }
}

const HandleDeleteUser = async(id) =>{
    try {
        await db.Users.destroy({
            where: {
              id: id,
            },
          });
        console.log(id);
    } catch (error) {
        console.log(error);
    }
}

const HandleDeleteAdmin = async(id) =>{
    try {
        await db.Admin.destroy({
            where: {
              id: id,
            },
          });
        console.log(id);
    } catch (error) {
        console.log(error);
    }
}

const HandleDeleteProduct = async(id) =>{
    try {
        await db.Products.destroy({
            where: {
              id: id,
            },
          });
        console.log(id);
    } catch (error) {
        console.log(error);
    }
}



const CreateProducts = async (name, price, code, url_image) =>{
    try {
        let CheckCode = await db.Products.findOne({ where: { code: code } });
        if(CheckCode != null){
            return {"message":"Mã sản phẩm đã tồn tại trong hệ thống!"};
        }else {        
            const newUser = await db.Products.create({ 
            name: name, 
            price: price, 
            code: code,
            url_image: url_image
         });
    
        return newUser.name;  }
    } catch (error) {
        console.log(error);
    }
}

const HandleGetListProducts = async() =>{
    try {
        let ListUsers = await db.Products.findAll();
        // console.log(ListUsers)
        return ListUsers

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    HandleCreateUser,
    HandleGetListUser,
    HandleGetListAdmin,
    HandleCreateAdmin,
    HandleDeleteUser,
    CreateProducts,
    HandleGetListProducts,
    HandleDeleteProduct,
    HandleDeleteAdmin
}