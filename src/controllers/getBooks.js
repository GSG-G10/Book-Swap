const checkAuth = require('./authCheck');
const logout = require('./logout');
require('env2')('.env');
const { getBooksQuery } = require('../Database/queries');

const getBooks = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookies[authCookieName];
    const getBookCheck = (err, data) => {
        if (err) {
            logout(req, res);
        }
        if (data) {
            const userName = data.userName;
            const { bookName, bookAuthor, bookImg } = req.body;
            getBooksQuery().then((data) => {
                    res.json(data);
                })
                .catch(err => res.status(500).json({ message: 'Internal server error' }));
        }
    };
    checkAuth(authCookie, getBookCheck);
};

module.exports = getBooks;