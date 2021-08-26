const checkAuth = require('./authCheck');
const createSession = require('./createSession');
const { checkIfMember, addUser } = require('../Database/queries');
const { hashPassword } = require('../utilities/hashPassword');
require('env2')('.env');
const signup = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookies[authCookieName];
    console.log(authCookieName);
    const registerUser = (err, data) => {
        if (err) {
            res.clearCookie(authCookieName);
            const { userName, firstName, lastName, email, password } = req.body;
            console.log(userName, firstName, lastName, email, password);
            checkIfMember(userName).then(exists => {
                    console.log('sss');
                    if (exists)
                        res.status(409).json({ message: 'User name taken' });
                })
                .then(() => {
                    console.log('maslkdfj');
                    hashPassword(password).then(hashedPass => {
                        console.log('hash', hashedPass);
                        addUser(userName, firstName, lastName, email, hashedPass).then(() => {
                                console.log('add');
                                res.cookie(authCookieName, createSession(userName), { httpOnly: true, secure: true });
                                res.cookie('userName', userName);
                                res.redirect('/home');
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json(err)
                            });
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json(err)
                });
        }
        if (data)
            res.redirect('/home');
    };
    checkAuth(authCookie, registerUser);
};

module.exports = signup;