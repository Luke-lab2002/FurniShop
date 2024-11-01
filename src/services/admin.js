import db from "../models";
const bcrypt = require('bcrypt');


const saltRounds = 10;
const banUser = false;



const HandleCreateUser = async(email, name, password) =>{
    try {
        let checkEmail = await db.Users.findOne({ where: { email: email } });
        let passwordhashed = bcrypt.hashSync(password, saltRounds);
        if(checkEmail != null){
            return "email đã tồn tại trong hệ thống!";
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

const HandleGetListUser = async() =>{
    try {
        let ListUsers = await db.Users.findAll();
        // console.log(ListUsers)
        return ListUsers

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    HandleCreateUser,
    HandleGetListUser
}