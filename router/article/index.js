const express = require('express');
const router = express.Router();
const controller = require('./article.controller');

/* GET article listing. */
router.get('/:pageNum', controller.article);


/* POST users listing. */
// router.post('/register', controller.insertUser);
module.exports = router