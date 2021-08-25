const login = (req , res) => {
    res.json(
        {
            message: 'Hi from login!',
        }
    ) 
};

module.exports = login;