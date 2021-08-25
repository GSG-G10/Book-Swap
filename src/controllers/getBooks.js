const getAllData = require('../Database/queries/getAllData')
const getBooks = (req , res) => {
    getAllData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ msg: 'Internal server error' });
    });
};

module.exports = getBooks;