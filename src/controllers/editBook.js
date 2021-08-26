const { checkAuth, logout } = require('../controllers');
const { checkUserBook, removeUserBook } = require('../Database/queries');

const editBook = (res, req) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookie[authCookieName];
    const editBookCheck = (err, data) => {
        if (err) {
            logout(req, res);
        }
        if (data) {
            const bookID = req.body.bookID;
            const userName = data.userName;
            checkUserBook(userName, bookID).then(exists => {
                if (!exists)
                    res.status(403).json({ message: 'Don\'t have access' });
                else {
                    removeUserBook(userName, bookID).then(() => res.json({ message: 'book deleted successfully' }));
                }
            });
        }
    };
    checkAuth(authCookie, editBookCheck);
};

module.exports = editBook;