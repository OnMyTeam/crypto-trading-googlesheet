const crypto = require('crypto');
const { google } = require("googleapis");

const KEYFILEPATH = "./auth/api-project-143922408235-da6022537b9f.json"; // 서비스 계정 키 파일
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// 기존 스프레드시트 ID (주소에서 /d/ 와 /edit 사이 부분)
const SPREADSHEET_ID = "1Pyz_v2C4foxbYW7nWat8yDA0Tx-mWkyA2rFH59p-jYE";

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
});


var sheetName = ""
console.log("KEYFILEPATH   ", KEYFILEPATH);

// 매매내역 저장
exports.write = (req, res, next) => {
    
    addData(req.body).catch(console.error);


    res.status(200).send({
        status: 1
    })
}


async function addData(params) {

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // 오늘 날짜를 시트 이름으로
    const today = new Date();
    const _sheetName = today.toISOString().split("T")[0];
    //  새 시트 추가 요청
    if (sheetName != _sheetName) {
        sheetName = _sheetName;
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            resource: {
                requests: [
                    {
                        addSheet: {
                            properties: {
                                title: sheetName,
                            },
                        },
                    },
                ],
            },
        });

        // 새 시트에 헤더 작성
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheetName}!A1`,
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [
                        "uuid", 
                        "side", 
                        "ord_type",
                        "price",
                        "state",
                        "market",
                        "created_at",
                        "volume",
                        "remaining_volume",
                        "reserved_fee",
                        "remaining_fee",
                        "paid_fee",
                        "locked",
                        "executed_volume",
                        "trades_count"
                    ]
                ],
            },
        });

        console.log(`✅ 새 시트 추가됨: ${sheetName}`);
    }

    // // 새 시트에 데이터 작성
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [
                    params.uuid, 
                    params.side,
                    params.ord_type,
                    params.price,
                    params.state,
                    params.market,
                    params.created_at,
                    params.volume,
                    params.remaining_volume,
                    params.reserved_fee,
                    params.remaining_fee,
                    params.paid_fee,
                    params.locked,
                    params.executed_volume,
                    params.trades_count
                ]
            ],
        },
    });

    console.log("✅ 데이터 입력 완료!");
}