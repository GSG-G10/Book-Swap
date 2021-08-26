const checkAuth = require('./authCheck');
const createSession = require('./createSession');
const { checkIfMember, getPassword } = require('../Database/queries');
const { comparePasswords } = require('../utilities/hashPassword');
require('env2')('.env');
const login = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookies[authCookieName];
    const loginCheck = (err, data) => {
        if (err) {
            res.clearCookie(authCookieName);
            const { userName, password } = req.body;
            checkIfMember(userName).then(exists => {
                    if (!exists)
                        res.status(404).json({ message: 'Not a member' });
                })
                .then(() => {
                    getPassword(userName).then(data => {
                        console.log(password, data.password);
                        comparePasswords(password, data.password, (err, same) => {
                            if (err) {
                                console.log(err);
                                res.status(500).json({ message: 'Internal server error' });
                            } else if (same) {
                                res.cookie(authCookieName, createSession(userName), { httpOnly: true, secure: true, maxAge: 2 * 60 * 60 * 1000 });
                                res.cookie('userName', userName);
                                res.redirect('/home');
                            } else res.status(403).json({ message: 'User or Password error' });
                        });
                    });
                });
        }
        if (data)
            res.redirect('/home');
    };
    checkAuth(authCookie, loginCheck);
};

module.exports = login;