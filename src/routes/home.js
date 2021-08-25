const router = require('express').Router();
const {getHomePage, getBooks, borrowBook} = require('../controllers');

router.get('/books',getBooks);
router.post('/borrow', borrowBook);
router.use('/', getHomePage);

module.exports = router;