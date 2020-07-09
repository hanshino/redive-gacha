# 公主連結轉蛋
公主連結Re:dive轉蛋模擬器

Other Languages:
* [English](README.en-US.md)

****

### 使用環境

1. Node.js

### 如何使用？

1. 打開CLI
2. `git clone https://github.com/hanshino/redive-gacha.git`
3. `cd redive-gacha`
4. `npm install` 或 `yarn install`
5. `node index.js`

### 擴充

* 可編輯 `gachaPool.json` 進行轉蛋池的資料擴充

### 執行結果

```
λ node index.js
┌─────────┬────────┬───────────────────────────────────────────────────────────────────┬──────┬──────────┬────────────┐
│ (index) │  name  │                               image                               │ star │   rate   │ isPrincess │
├─────────┼────────┼───────────────────────────────────────────────────────────────────┼──────┼──────────┼────────────┤
│    0    │ '日和' │ 'https://pcredivewiki.tw/static/images/unit/icon_unit_100111.png' │ '1'  │ '4.187%' │    '1'     │
│    1    │  '禊'  │ 'https://pcredivewiki.tw/static/images/unit/icon_unit_100411.png' │ '1'  │ '4.187%' │    '1'     │
│    2    │ '宮子' │ 'https://pcredivewiki.tw/static/images/unit/icon_unit_100711.png' │ '2'  │ '8.666%' │    '1'     │
│    3    │ '宮子' │ 'https://pcredivewiki.tw/static/images/unit/icon_unit_100711.png' │ '2'  │ '8.666%' │    '1'     │
│    4    │ '莉瑪' │ 'https://pcredivewiki.tw/static/images/unit/icon_unit_105211.png' │ '1'  │ '4.187%' │    '1'     │
└─────────┴────────┴───────────────────────────────────────────────────────────────────┴──────┴──────────┴────────────┘
```
