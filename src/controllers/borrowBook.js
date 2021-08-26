const { checkAuth, logout } = require('../controllers');
const { checkUserBooksNumber, borrowBookQuery, checkBooksStatus } = require('../Database/queries');

const borrowBook = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookie[authCookieName];
    const borrowBookCheck = (err, data) => {
        if (err) {
            logout(req, res);
        }
        if (data) {
            const userName = data.userName;
            const { bookID } = req.body;
            checkUserBooksNumber(userName).then((allowed) => {
                    if (!allowed)
                        res.status(403).json({ message: 'Book limit reached' });
                    else return allowed;
                })
                .then(() => checkBook(bookID).then(exists => {
                    if (!exists)
                        res.status(403).json({ message: 'Book doesn\'t exist' });
                }))
                .then(() => checkBooksStatus(bookID).then((taken) => {
                    if (taken)
                        res.status(403).json({ message: 'Book already rented' });
                })).then(() => borrowBookQuery(userName, bookID))
                .then(() => res.json({ message: 'Book borrowed successfully' }))
                .catch(err => res.status(500).json({ message: 'Internal server error' }));
        }
    };
    checkAuth(authCookie, borrowBookCheck);
};

module.exports = borrowBook;