const  signupQuery = require('../Database/queries')
const signup = (req , res) => {
    const {username, firstName, lastName, email, password, picture} = req.body;
    signupQuery(username, firstName, lastName, email, password, picture)
    .then(() => {
        res.send('Sign Up Successful')
    }).catch(error => {
        console.log(error)
        res.status(500).json({msg: 'internal server error'})
    })
};

module.exports = signup;