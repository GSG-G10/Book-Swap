const connection = require('../config/connection');
const checkBookStatus=(bookId)=>{
    const sql ={
        text:'select BOOK_ID from RENTS where BOOK_ID =$1;',
        values:[bookId]
}
return connection.query(sql);
}
module.exports=checkBookStatus;