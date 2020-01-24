const controller = require('../controller/user-controller');
var router = require('express').Router();
router.post('/account/signup', controller.signup);
router.post('/account/signin', controller.signin);
router.get('/account/verify', controller.verify);
router.get('/account/logout', controller.logout);
module.exports = router;