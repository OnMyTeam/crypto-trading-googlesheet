const express = require('express');
const router = express.Router();
const controller = require('./googlesheet.controller');

/* GET users listing. */
router.get('/', controller.getUserAll);
router.get('/:id', controller.getUser);


/* POST users listing. */
router.post('/write', controller.write);
module.exports = router