const express = require('express');
const app = express();

const freeBoardRouter = require("./freeboard");

app.use(express.urlencoded({ extended: false }));
app.use("/freeboard", freeBoardRouter);
