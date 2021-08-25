const connection = require('../config/connection');
const checkUser=(email , password)=>{
    const sql ={
        text:'select EMAIL from USERS where EMAIL =$1 and passeord=$2;',
        values:[email,password]
}
return connection.query(sql);
}
module.exports=checkUser;