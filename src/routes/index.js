const router = require('express').Router();
const registration = require('./registration');
const home = require('./home');
const profile = require('./profile');

router.use('/home' , home);
router.use('/profile' , profile);
router.use('/registration' , registration );

module.exports = router;