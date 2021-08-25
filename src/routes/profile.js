const router = require('express').Router();
const {generateError , getUser,addBook, editBook, deleteBook, returnBook} = require('../controllers');

router.get('/profile', generateError);
router.get('/profile/:username', getUser);
router.post('/profile/:username/add', addBook);
router.put('/profile/:username/edit', editBook);
router .delete('/profile/:username/delete', deleteBook);
router.delete('/profile/:username/return', returnBook);

module.exports = router;