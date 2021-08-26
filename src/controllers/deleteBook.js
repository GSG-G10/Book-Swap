const {deleteBookQuery} = require('../Database/queries')
const deleteBook = (req , res) => {
    const {bookName} = req.body 
    deleteBookQuery(bookName)
    .then(() => {
        res.send('book deleted')
    }).catch(console.error());
};

module.exports = deleteBook;