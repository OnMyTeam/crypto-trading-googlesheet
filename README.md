"# crypto-trading-googlesheet" 


---

## API명세
### URL: http://52.78.101.206:3000
### 1. 매매내역 저장
**`POST /googlesheet/write/`**

빗썸에서 매매내역에 대한 데이터를 구글시트에 적재합니다.

| 필드                   | 설명                           | 비고                                 |
|------------------------|-------------------------------|--------------------------------------|
| uuid                   | 주문 고유 ID                   |                                      |
| side                   | 주문 종류 (매수/매도)          | bid-매수 / ask-매도                  |
| ord_type               | 주문 방식 (지정가, 시장가 등)  | limit, market 등                     |
| price                  | 주문 가격                      |                                      |
| state                  | 주문 상태 (대기, 완료, 취소 등)| wait, done, cancel 등                |
| market                 | 거래 마켓 ID                   |                                      |
| created_at             | 주문 생성 시간                 |                                      |
| volume                 | 주문 수량                      |                                      |
| remaining_volume       | 미체결 수량                    |                                      |
| reserved_fee           | 예약된 수수료                  |                                      |
| remaining_fee          | 남은 수수료                    |                                      |
| paid_fee               | 사용된 수수료                  |                                      |
| locked                 | 거래에 잠긴 금액               |                                      |
| executed_volume        | 체결된 수량                    |                                      |
| trades_count           | 발생한 체결 횟수               |                                      |
| trades                 | 각 체결 내역 (배열)            |                                      |
| token_price            | 코인 매수 또는 매도한 가격     |                                      |
| profit                 | 수익금                         |                                      |
| profit_rate            | 수익률                         |                                      |
| cumulative_profit      | 누적 수익금

#### Request
```json
{
    "uuid": "123e4567-e89b-12d3-a456-426614174000",
    "side": "bid",
    "ord_type": "limit",
    "price": "50000000",         
    "state": "wait",
    "market": "KRW-BTC",
    "created_at": "2025-08-23T14:35:00Z",
    "volume": "0.005",
    "remaining_volume": "0.005",
    "reserved_fee": "100",
    "remaining_fee": "100",
    "paid_fee": "0",
    "locked": "250000",
    "executed_volume": "0",
    "trades_count": 0,
    "token_price": 5000000,
    "profit": 1500000,
    "profit_rate": 0.1512,
    "cumulative_profit": 3000000,
    "cumulative_profit_rate": 1500000
}
```
#### Response
```json
success
{
    "status": 1
}

fail
{
    "status": 0,
    "err": "xxxx"
}
