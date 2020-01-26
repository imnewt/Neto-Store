const controller = require('../controller/book-controller');
var router = require('express').Router();

router.get('/books', controller.index);
module.exports = router;