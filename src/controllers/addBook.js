const { checkAuth, logout } = require('../controllers');
const { addBookQuery } = require('../Database/queries');

const addBook = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookie[authCookieName];
    const addBookCheck = (err, data) => {
        if (err) {
            logout(req, res);
        }
        if (data) {
            const userName = data.userName;
            const { bookName, bookAuthor, bookImg } = req.body;
            addBookQuery(userName, bookName, bookAuthor, bookImg).then(() => {
                    res.json({ message: 'Book added successfully' });
                })
                .catch(err => res.status(500).json({ message: 'Internal server error' }));
        }
    };
    checkAuth(authCookie, addBookCheck);
};

module.exports = addBook;