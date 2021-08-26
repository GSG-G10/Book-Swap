const connection = require('../config/connection');
const checkUser=(userName)=>{
    const sql ={
        text:'SELECT * FROM USERS WHERE USERNAME =$1 ',
        values:[userName]
}
return connection.query(sql);
}
module.exports=checkUser;