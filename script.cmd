npx sequelize-cli model:generate --name Users --attributes name:string,email:string,password:string,ban:boolean
npx sequelize-cli model:generate --name Orders --attributes user_id:integer,address:string,state_id:integer,state_notifi:boolean
npx sequelize-cli model:generate --name Admin --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name Products --attributes name:string,price:integer,url_image:string,code:string,id_admin:integer
npx sequelize-cli model:generate --name OrderDetails --attributes order_id:integer,product_id:integer,number:integer
npx sequelize-cli model:generate --name Articles --attributes title:string,content:text,url_image:string,id_admin:integer

npx sequelize-cli model:generate --name CommentArticle --attributes user_id:integer,content:text,article_id:integer,state_notifi:boolean
npx sequelize-cli model:generate --name CommentProducts --attributes user_id:integer,content:text,product_id:integer,state_notifi:boolean