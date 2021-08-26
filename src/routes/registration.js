const router = require('express').Router();
const { login, signup, logout } = require('../controllers');
console.log('hello');
router.post('/login', login);
router.post('/signup', signup);
<<<<<<< HEAD
router.get('/logout',logout);
=======
router.get('/logout', logout);
>>>>>>> d4fb65e78f8c502db96066eadcbeea05103102a5

module.exports = router;