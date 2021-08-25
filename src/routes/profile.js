const router = require('express').Router();
const {generateError , getUser,addBook, editBook, deleteBook, returnBook} = require('../controllers');

router.get('/', generateError);
router.get('/:username', getUser);
router.post('/:username/add', addBook);
router.put('/:username/edit', editBook);
router .delete('/:username/delete', deleteBook);
router.delete('/:username/return', returnBook);

module.exports = router;