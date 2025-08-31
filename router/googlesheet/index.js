const express = require('express');
const router = express.Router();
const controller = require('./googlesheet.controller');


/* POST googlesheet write, update */
router.post('/write', controller.write);
module.exports = router