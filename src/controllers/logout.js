require('env2')('.env');
const logout = (req, res) => {
    res.clearCookie(process.env.AUTH_COOKIE);
    res.clearCookie('userName');
    res.redirect('/');
};

module.exports = logout;