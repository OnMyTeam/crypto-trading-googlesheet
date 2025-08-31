"# crypto-trading-googlesheet" 


---

## API명세
### URL: http://52.78.101.206:3000
### 1. 매매내역 저장
**`POST /googlesheet/write/`**

빗썸에서 매매내역에 대한 데이터를 구글시트에 적재합니다.

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
    "trades_count": 0
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
