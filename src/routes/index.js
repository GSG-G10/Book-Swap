const router = require('express').Router();
const registration = require('./registration');
const home = require('./home');
const profile = require('./profile');

router.use(registration);
router.use(home);
router.use(profile);

module.exports = router;