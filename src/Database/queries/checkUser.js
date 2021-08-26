const connection = require('../config/connection');
const checkUser=(email , password)=>{
    const sql ={
        text:'SELECT EMAIL FROM USERS WHERE EMAIL =$1 and PASSWORD=$2;',
        values:[email,password]
}
return connection.query(sql);
}
module.exports=checkUser;