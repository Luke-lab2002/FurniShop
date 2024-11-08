import { where } from "sequelize";
import db from "../models";
import bcrypt from 'bcrypt';

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

const HandleLoginUser = async(email, password)=>{
    try {
        let checkEmail = await db.Users.findOne({ where: { email: email } });
        if(checkEmail != null){
            let checkPassword = bcrypt.compareSync(password, checkEmail.password);
            if(checkPassword){
                return checkEmail;
            }
            else{
                console.log("EC2 Email hoặc mật khẩu bị lỗi");    
            }
        } 
        else{
            console.log("EC1 Email hoặc mật khẩu bị lỗi");
        }
    } catch (error) {
        console.log(error)
    }
}

const HandleCreateAdmin = async(email, name, password) =>{
    try {
        let checkEmail = await db.Admin.findOne({ where: { email: email } });
        let passwordhashed = bcrypt.hashSync(password, saltRounds);
        if(checkEmail != null){
            return {"message":"email đã tồn tại trong hệ thống!"};
        }else {        
            const newAdmin = await db.Admin.create({ 
            email: email, 
            name: name, 
            password: passwordhashed,
         });
    
        return newAdmin.name;  }
      
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
            const newProduct = await db.Products.create({ 
            name: name, 
            price: price, 
            code: code,
            url_image: url_image
         });
    
        return newProduct.name;  }
    } catch (error) {
        console.log(error);
    }
}

const HandleGetListProducts = async() =>{
    try {
        let ListProduct = await db.Products.findAll({
            include: [{
                model: db.Admin,
                as:'Admin',
                attributes: ['name'] // Chỉ lấy tên admin
            }]
        });
        // console.log(ListUsers)
        return ListProduct

    } catch (error) {
        console.log(error);
    }
}

const HandleGetInforProduct = async(id) =>{
    let product = await db.Products.findOne({
        where:{
            id:id
        }
    })

    return product;
}

const HandleUpdateProduct = async(id, name, price, code, url_image=null) =>{
    const updateData = {
        name: name,
        price: price,
        code: code,
    };
    
    // Kiểm tra nếu url_image không null thì mới thêm vào updateData
    if (url_image !== null) {
        updateData.url_image = url_image;
    }

    // Thực hiện cập nhật
    await db.Products.update(updateData, {
        where: { id: id },
    });
}


const HandleCreateArticle = async (title, content, url_image) =>{
    try {
        let CheckCode = await db.Articles.findOne({ where: { title: title } });
        if(CheckCode != null){
            return {"message":"Tiêu đề đã tồn tại trong hệ thống"};
        }else {        
            const newArticle = await db.Articles.create({ 
            title: title, 
            content: content, 
            url_image: url_image
         });
    
        return newArticle.name;  }
    } catch (error) {
        console.log(error);
    }
}

const HandleGetListArticles = async()=>{
    try {
        let ListArticles = await db.Articles.findAll({
            include: [{
                model: db.Admin,
                as:'Admin',
                attributes: ['name'] // Chỉ lấy tên admin
            }]
        });
        // console.log(ListUsers)
        return ListArticles

    } catch (error) {
        console.log(error);
    }
}

const HandleCreateOrderDetails = async (order_id, product_id, number)=>{
    try {
        const newOrderDetail = await db.OrderDetails.create({ 
            order_id: order_id, 
            product_id: product_id, 
            number: number,
         });
    
        return newOrderDetail;  
    } catch (error) {
        console.log(error);
    }
}

const HandleCreateOrder = async (user_id, address, state_id, state_notifi=false)=>{
    try {
        const newOrder = await db.Orders.create({ 
        user_id: user_id, 
        address: address, 
        state_id: state_id,
        state_notifi:state_notifi
     });

        return newOrder;  
    } catch (error) {
        console.log(error);
    }
}

const HandleOrder = async (user_id, address, product_id, number)=>{
    let state_id = 0;
    try {
        let checkOrder = await db.Orders.findOne({where:{user_id:user_id,
            state_id:state_id
        }});
        console.log(checkOrder);
        if(checkOrder == null){
           let order = await HandleCreateOrder(user_id, address, state_id);
           let orderdetail = await HandleCreateOrderDetails(order.id, product_id, number);
           return orderdetail;
        
        }else{
           let orderdetail = HandleCreateOrderDetails(checkOrder.id, product_id, number);
           return orderdetail;
        }

        
    } catch (error) {
        console.log(error);
    }
}

const GetListOrderDetails = async (email)=>{
    try {
        let ListOrderDetails = await db.OrderDetails.findAll({
            include: [ {
                model: db.Orders,
                as: 'Orders',
                required: true,
                where:{
                    state_id:0
                },
                include: [
                    {
                        model: db.Users,
                        as: 'Users',
                        required: true,
                        where: { email: email }, // Tìm theo email trong bảng User
                    },
                ],
            },
            {
                model: db.Products,
                as:'Products',
                attributes: ['name', "url_image", "price"] 
            }],
        });     
        console.log(ListOrderDetails)
        return ListOrderDetails

    } catch (error) {
        console.log(error);
    }
}

const RemoveOrderDetailsDB = async (id)=>{
    try {
        await db.OrderDetails.destroy({
            where: {
                id: id,
            },
        });
    } catch (error) {
        console.log(error);
    }

}

const UpdateOrderDetails = async (id, number) =>{
    try {
        const updateData = {
            number:number
        };

        await db.OrderDetails.update(updateData,{
            where:{
                id:id
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}

const UpdateOrder = async (user_id, address) =>{
    try {
        const updateData = {
            address:address,
            state_id:1,
        };

        await db.Orders.update(updateData,{
            where:{
                user_id:user_id,
                state_id:0,
            }
        })
        
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
    HandleDeleteAdmin,
    HandleCreateArticle,
    HandleGetListArticles,
    HandleGetInforProduct,
    HandleUpdateProduct, 
    HandleCreateOrderDetails,
    HandleCreateOrder,
    HandleOrder,
    GetListOrderDetails,
    RemoveOrderDetailsDB,
    UpdateOrderDetails,
    HandleLoginUser,
    UpdateOrder
}