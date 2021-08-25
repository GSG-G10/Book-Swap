const router = require('express').Router();
const registration = require('./registration');

router.use(registration);

module.exports = router;