
const database = require('../../db/dbconnect')
const rankQuery = require('../../db/rank/rankQuery')

// playtoearnnet 랭킹조회
exports.playtoearn = (req, res, next) => {

    // requset Info
    const pageNum = req.params.pageNum;
    // DBInfo
    const conn = database.connectDB();
    const query = rankQuery.getPlayToEarnRank(pageNum)
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


// DappRadar 랭킹조회
exports.dappradar = (req, res, next) => {
    // res.header("Access-Control-Allow-Origin","*");
    // requset Info
    const pageNum = req.params.pageNum;
    // DBInfo
    const conn = database.connectDB();
    const query = rankQuery.getDappRadarRank(pageNum);
    // console.log(query)
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