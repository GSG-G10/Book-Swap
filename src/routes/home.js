const router = require('express').Router();
const { getHomePage, getBooks, addBook } = require('../controllers');

router.post('/addBook', addBook);
router.get('/books', getBooks);
//router.post('/borrow', borrowBook);
router.get('/', getHomePage);

module.exports = router;