const express = require('express');
const router = express.Router();
const controller = require('./rank.controller');

/* GET users listing. */
router.get('/playtoearn/:pageNum', controller.playtoearn);
router.get('/dappradar/:pageNum', controller.dappradar);


/* POST users listing. */
// router.post('/register', controller.insertUser);
module.exports = router