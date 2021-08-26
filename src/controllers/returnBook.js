const { checkAuth, logout } = require('../controllers');
const { checkUserRent, removeBookRent } = require('../Database/queries');

const returnBook = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookie[authCookieName];
    const returnBookCheck = (err, data) => {
        if (err) {
            logout(req, res);
        }
        if (data) {
            const bookID = req.body.bookID;
            const userName = data.userName;
            checkUserRent(userName, bookID).then(exists => {
                if (!exists)
                    res.status(403).json({ message: 'Don\'t have access' });
                else {
                    removeBookRent(userName, bookID).then(() => res.json({ message: 'book returned successfully' }));
                }
            });
        }
    };
    checkAuth(authCookie, returnBookCheck);

};

module.exports = returnBook;