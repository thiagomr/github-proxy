const express = require('express');
const router = express.Router();

const { healthcheckController } = require('../controllers');

router.get('/ping', healthcheckController.ping);

module.exports = router;
