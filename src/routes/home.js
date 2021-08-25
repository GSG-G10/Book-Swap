const router = require('express').Router();
const {getHomePage, getBooks, borrowBook} = require('../controllers');

router.get('/home/books',getBooks);
router.post('/home/borrow', borrowBook);
router.use('/home', getHomePage);

module.exports = router;