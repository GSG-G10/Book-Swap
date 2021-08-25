const logout = (req , res) => {
    res.json(
        {
            message: 'Hi from logout!',
        }
    ) 
};

module.exports = login;