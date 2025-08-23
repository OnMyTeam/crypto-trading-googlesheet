const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const googleSheetRouter = require("./googlesheet");
// const rankRouter = require("./rank");
// const articleRouter = require("./article");
// const boardRouter = require("./board/index");

router.use('/googlesheet', googleSheetRouter);
// router.use('/rank', rankRouter);
// router.use('/article', articleRouter);
// // router.use('/board', boardRouter);

module.exports = router;