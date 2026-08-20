/* =====================================================================
   data.js — 這是唯一需要你編輯的檔案
   ---------------------------------------------------------------------
   ✅ 已換成你的實際行程。來源：
      - 交通／住宿：trip 資料夾內的高鐵訂票截圖、Agoda 訂房確認信（真實資料）
      - 八筒甜室／周氏蝦捲：trip 資料夾內的 Klook 兌換憑證截圖（真實資料）
      - 各景點座標：沿用先前 Google Places 查詢結果
      - 酒店／八筒甜室／藍晒圖文創園區／安平老街 座標：本次僅查得地址，
        座標為依地址位置推估，尚未逐一以 Google Places 核實
        → ⚠️ 出發前務必在 Google 地圖搜尋地址核對一次，標記處已加註提醒
   ===================================================================== */

const TRIP = {
  /* ---------- 1. 基本資訊 ---------- */
  city: '台南',
  cityEn: 'TAINAN',
  subtitle: '府城慢行',
  startDate: '2026-08-26',   // 出發日（週三）；退房／回程為 2026-08-29（週六）
  travelMode: 'driving',     // driving | walking | transit | bicycling

  /* ---------- 2. 交通（台灣高鐵，實際訂票資料） ---------- */
  transport: [
    {
      dir: 'OUTBOUND', dirZh: '去程', carrier: '台灣高鐵', code: '0825',
      fromCode: 'TPE', fromName: '台北站', fromTime: '12:11',
      toCode: 'TNN', toName: '台南站', toTime: '14:11',
      dayIndex: 0, tags: ['對號座', '車廂 3', '3D／3E 座'],
      note: '訂位代號 01990845；成人票 ×2，總價 NT$1,750'
    },
    {
      dir: 'RETURN', dirZh: '回程', carrier: '台灣高鐵', code: '0660',
      fromCode: 'TNN', fromName: '台南站', fromTime: '16:13',
      toCode: 'TPE', toName: '台北站', toTime: '17:59',
      dayIndex: 3, tags: ['對號座', '車廂 3', '4D／4E 座'],
      note: '訂位代號 01991422；成人票 ×2，總價 NT$2,020'
    }
  ],

  /* ---------- 3. 住宿（Agoda 訂房確認信，訂單編號 1761416787） ---------- */
  stays: [
    {
      name: '劇院酒店-台南成功館 (The Theatre Tainan ChengGong)', area: '北區',
      checkIn: 0, checkOut: 3,          // 8/26 入住 → 8/29 退房，共 3 晚
      lat: 22.9989, lng: 120.2117,
      addr: '台南市北區成功路46號（704003）',
      note: '⚠️ 座標為地址推估，出發前請以 Google 地圖核對。入住15:00／退房11:00；步行7分鐘至台南火車站、1分鐘至7-11；無停車場；標準雙床房2人；房內無一次性備品，續住不每日換床單毛巾；電話 +886-6-2258121'
    }
  ],

  /* ---------- 4. 每日行程 ---------- */
  days: [
    {
      theme: '抵達＋府城老城區',
      themeEn: 'ARRIVAL & OLD TOWN',
      stops: [
        { time: '14:11', name: '高鐵台南站', en: 'THSR Tainan', lat: 22.9246367, lng: 120.28566,
          placeId: 'ChIJfXKoA6ZzbjQRrgQ9yogpRsI',
          addr: '台南市歸仁區歸仁大道100號',
          note: '訂位代號 01990845；轉台鐵沙崙線約 25 分鐘進市區', tag: '交通' },
        { time: '15:00', name: '飯店 Check-in：劇院酒店-台南成功館', en: 'Hotel Check-in', lat: 22.9989, lng: 120.2117,
          addr: '台南市北區成功路46號',
          note: '⚠️ 座標為推估，請出發前核對；訂單編號 1761416787', tag: '住宿' },
        { time: '16:00', name: '林百貨', en: 'Hayashi Dept. Store', lat: 22.9917925, lng: 120.2025232,
          placeId: 'ChIJrZJc4GJ2bjQRa3BRyIgtRcM',
          addr: '台南市中西區忠義路二段63號',
          note: '營業 11:00–21:00（Google 資料）；頂樓有神社', tag: '景點' },
        { time: '17:30', name: '赤崁樓', en: 'Chihkan Tower', lat: 22.997478, lng: 120.2025433,
          placeId: 'ChIJbYl7d2F2bjQRnFdvyMBuZfI',
          addr: '台南市中西區民族路二段212號',
          note: '營業 08:30–21:00（Google 資料）', tag: '景點' },
        { time: '19:00', name: '國華街三段', en: 'Guohua St. Sec.3', lat: 22.9965542, lng: 120.1985413,
          placeId: 'ChIJoa7dBGR2bjQR6aUS2zsY9wQ',
          addr: '台南市中西區國華街三段',
          note: '晚餐；多數小吃店下午收攤，建議先確認營業中的攤位', tag: '吃' },
        { time: '20:30', name: '神農街', en: 'Shennong St.', lat: 22.9975666, lng: 120.1965462,
          placeId: 'ChIJn4ahgmZ2bjQRRpYB7Ku1hcU',
          addr: '台南市中西區神農街',
          note: '老屋街區，傍晚點燈後較好拍', tag: '散步' }
      ]
    },
    {
      theme: '安平潟湖＋下午茶',
      themeEn: 'ANPING & TEA TIME',
      stops: [
        { time: '08:30', name: '四草綠色隧道（大眾廟）', en: 'Sicao Green Tunnel', lat: 23.0196399, lng: 120.1361465,
          placeId: 'ChIJt0-ISOvYbTQRhg3rUteyQIw',
          addr: '台南市安南區大眾路360號',
          note: '營業 08:00–16:00（Google 資料）；建議早場，人少', tag: '景點' },
        { time: '11:30', name: '安平古堡', en: 'Anping Fort', lat: 23.0015093, lng: 120.1606244,
          placeId: 'ChIJZ-TjeHN2bjQR8a3Jat0VHps',
          addr: '台南市安平區國勝路82號',
          note: '營業 08:30–17:10（Google 資料）', tag: '景點' },
        { time: '14:30', name: '八筒甜室', en: '8ottle8ottle Cakelab', lat: 22.9958, lng: 120.2020,
          addr: '台南市中西區忠義路二段192號',
          note: '⚠️ 已購 Klook 兌換券 ×2（生乳酪罐罐蛋糕+精選茗茶），憑證號 KLK1187350074，兌換日期 2026/8/27（週四）；座標為推估請核對；營業 11:00–18:00（週四），最後點餐打烊前1小時即17:00；週二三公休，出發前建議查 IG @8ottle_sweets_ 確認無臨時公休', tag: '吃' },
        { time: '18:00', name: '花園夜市', en: 'Garden Night Market', lat: 23.0112387, lng: 120.2002271,
          placeId: 'ChIJx7B27Vl2bjQRXNQQFasKOKI',
          addr: '台南市北區海安路三段533號',
          note: '本日為週四，屬營業日（僅週四・五・六・日 17:00–24:00）', tag: '吃' }
      ]
    },
    {
      theme: '孔廟＋安平二訪',
      themeEn: 'TEMPLE & SHRIMP ROLLS',
      stops: [
        { time: '09:00', name: '台南孔廟', en: 'Confucius Temple', lat: 22.9905296, lng: 120.2040401,
          placeId: 'ChIJFbzVrGJ2bjQRkZC9jslaIgs',
          addr: '台南市中西區南門路2號',
          note: '營業 08:30–17:30（Google 資料）', tag: '景點' },
        { time: '11:30', name: '周氏蝦捲（安平總店）', en: "Chow's Shrimp Rolls", lat: 22.9981946, lng: 120.1746147,
          addr: '台南市安平區安平路408-1號',
          note: '⚠️ 已購 Klook 兌換券 ×2（炸蝦捲+魚鬆肉燥飯+綜合湯+杏仁豆腐），憑證號 KLK7331935973，兌換日期 2026/8/28（週五）；電話 06-2801304；營業 10:00–21:30，全年無休；注意勿跑到安平路125號「老店」（另一家分店，時間不同）；週五晚間人潮多，11:30 用餐算離峰時段', tag: '吃' },
        { time: '13:30', name: '安平老街散步', en: 'Anping Old Street', lat: 23.0015093, lng: 120.1606244,
          note: '⚠️ 定位點沿用安平古堡座標，老街範圍請現場步行探索；可順遊安平樹屋、夕遊出張所', tag: '散步' },
        { time: '17:30', name: '藍晒圖文創園區', en: 'Blueprint Cultural Park', lat: 22.9903, lng: 120.2036,
          addr: '台南市南區西門路一段689巷12號',
          note: '⚠️ 座標為推估請核對；營業 10:00–21:00，傍晚燈光效果佳', tag: '景點' }
      ]
    },
    {
      theme: '奇美博物館＋返程',
      themeEn: 'MUSEUM & DEPARTURE',
      stops: [
        { time: '09:00', name: '退房：劇院酒店-台南成功館', en: 'Hotel Check-out', lat: 22.9989, lng: 120.2117,
          addr: '台南市北區成功路46號',
          note: '退房 11:00 前；可寄放行李', tag: '住宿' },
        { time: '09:30', name: '奇美博物館', en: 'Chimei Museum', lat: 22.9345608, lng: 120.2260268,
          placeId: 'ChIJq6qqqnp0bjQRpvTHZeYTjKg',
          addr: '台南市仁德區文華路二段66號',
          note: '營業 09:30–17:30（今日週六非公休日）；距高鐵台南站近', tag: '景點' },
        { time: '15:00', name: '高鐵台南站', en: 'THSR Tainan', lat: 22.9246367, lng: 120.28566,
          placeId: 'ChIJfXKoA6ZzbjQRrgQ9yogpRsI',
          addr: '台南市歸仁區歸仁大道100號',
          note: '訂位代號 01991422；16:13 發車，預留 1 小時緩衝', tag: '交通' }
      ]
    }
  ],

  /* ---------- 5. 行前準備（勾選狀態存在瀏覽器 localStorage） ---------- */
  checklist: [
    { group: '證件與票券', items: ['身分證', '高鐵訂位代號 01990845 / 01991422', 'Agoda 訂房確認信（訂單1761416787）', 'Klook 兌換券 QR Code（八筒甜室、周氏蝦捲）', '信用卡 / 現金'] },
    { group: '電子', items: ['行動電源', '充電線', '手機支架（租機車用）'] },
    { group: '天氣與衣物', items: ['雨傘 / 輕便雨衣', '防曬', '好走的鞋', '換洗衣物'] },
    { group: '出發前確認', items: ['核對酒店／八筒甜室／藍晒圖的估算座標（Google 地圖）', '八筒甜室、周氏蝦捲兌換券先截圖存手機', '住宿無停車場、無一次性備品，需自備盥洗用品', '離線地圖已下載'] }
  ]
};
