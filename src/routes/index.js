const router = require('express').Router();
const registration = require('./registration');
const home = require('./home');

router.use(registration);
router.use(home);

module.exports = router;