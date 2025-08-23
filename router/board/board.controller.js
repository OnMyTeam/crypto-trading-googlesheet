const express = require('express');
const database = require('../../db/dbconnect')
const commonQuery = require('../../db/user/userQuery')
const router = express.Router();


// 기사 목록
router.get("/:type", (req, res) => {
    // DBInfo
    const conn = database.connectDB();
    const query = commonQuery.getUserAll();
    console.log(query)
    conn.connect(function (err) {

        if (err) throw err;
        conn.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });

})

module.exports = router;