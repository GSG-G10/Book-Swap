const {addBookQuery} = require('../Database/queries')
const addBook = (res , req) => {
    const {username, bookName, bookPhoto, author} = req.body;
    addBookQuery(username, bookName, bookPhoto, author)
    .then(() => {
        res.send('Book added')
    }).catch(error => {
        console.log(error.message)
        res.status(500).json({msg: 'internal server error'})
    })
};

module.exports = addBook;