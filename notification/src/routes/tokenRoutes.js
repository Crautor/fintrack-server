const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.post('/registrar', tokenController.registerToken);

module.exports = router;
