
const database = require('../../db/dbconnect')
const userQuery = require('../../db/article/articleQuery')
const crypto = require('crypto');

// 각종 뉴스 조회
exports.article = (req, res, next) => {
    res.setTimeout(30000);
    // requset Info
    const pageNum = req.params.pageNum;
    // DBInfo
    const conn = database.connectDB();
    const query = userQuery.getArticle(pageNum)
    conn.connect(function (err) {
        if (err) {
            res.status(400).send({
                status: 0,
                message: err
            })
        }
        conn.query(query, function (err, result, fields) {
            if (err) {
                res.status(400).send({
                    status: 0,
                    message: err
                })
            }
            res.status(200).send({
                status: 1,
                result: result
            })
        });
    });  
}


