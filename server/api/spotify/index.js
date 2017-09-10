const express = require('express');
const controller = require('./spotify.controller');

const router = express.Router();

router.post('/swapToken', controller.swapToken)
router.post('/refreshToken', controller.refreshToken)

module.exports = router;