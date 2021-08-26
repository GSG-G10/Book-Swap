const { checkAuth, createSession } = require('../controllers');
const { checkIfMember, checkPassword } = require('../Database/queries');
const { comparePasswords } = require('../utilities/hashPassword');

const login = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookie[authCookieName];
    const loginCheck = (err, data) => {
        if (err) {
            res.clearCookie(authCookieName);
            const { userName, password } = req.body;
            checkIfMember(userName).then(data => {
                    if (data.length === 0)
                        res.status(404).json({ message: 'Not a member' });
                    else return data;
                })
                .then(() => {
                    checkPassword(userName, password).then(data => {
                        if (data.length === 0)
                            res.status(403).json({ message: 'User or Password error' });
                        else {
                            comparePasswords(password, data[0].password, (err, same) => {
                                if (err)
                                    res.status(500).json({ message: 'Internal server error' });
                                if (same) {
                                    res.cookie(authCookie, createSession(userName), { httpOnly: true, secure: true, maxAge: 2 * 60 * 60 * 1000 });
                                    res.cookie('userName', userName);
                                    res.redirect('/home');
                                }
                            });
                        }
                    });
                });
        }
        if (data)
            res.redirect('/home');
    };
    checkAuth(authCookie, loginCheck);

};

module.exports = login;