const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/helloWorld', controller.helloWorld);
router.get('/:id', controller.show);

module.exports = router;