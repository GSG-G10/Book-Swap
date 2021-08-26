const { checkAuth, createSession } = require('../controllers');
const { checkIfMember, addUser } = require('../Database/queries');

const signup = (req, res) => {
    const authCookieName = process.env.AUTH_COOKIE;
    const authCookie = req.cookie[authCookieName];
    const registerUser = (err, data) => {
        if (err) {
            res.clearCookie(authCookieName);
            const { userName, firstName, lastName, email, password } = req.body;
            checkIfMember(userName).then(data => {
                    if (data.length === 1)
                        res.status(409).json({ message: 'User name taken' });
                    else return data;
                })
                .then(() => {
                    addUser(userName, firstName, lastName, email, password).then(() => {
                            res.cookie(authCookie, createSession(userName), { httpOnly: true, secure: true });
                            res.cookie('userName', userName);
                            res.redirect('/home');
                        })
                        .catch(err => res.status(500).json({ message: 'Internal server error' }));
                }).catch(err => res.status(500).json({ message: 'Internal server error' }));
        }
        if (data)
            res.redirect('/home');
    };
    checkAuth(authCookie, registerUser);
};

module.exports = signup;