<!DOCTYPE html>
<html lang="my">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Myanmar 2D & 3D Live</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
body { background-color: #0f172a; color: #ffffff; padding-bottom: 90px; }
​/* Header */
.header { display: flex; justify-content: space-between; align-items: center; padding: 16px; background-color: #090d16; border-bottom: 1px solid #1e293b; position: sticky; top: 0; z-index: 50; }
.header h1 { font-size: 18px; font-weight: bold; }
.live-tag { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); font-size: 11px; font-weight: bold; padding: 3px 10px; border-radius: 20px; }
.gear-btn { background: none; border: none; color: #94a3b8; font-size: 18px; cursor: pointer; padding: 4px; }
​/* Container */
.container { padding: 16px; max-width: 480px; margin: 0 auto; }
.page { display: none; }
.page.active { display: block; }
​/* Main Live Card */
.live-box { text-align: center; padding: 24px 16px; background: linear-gradient(180deg, rgba(30, 58, 138, 0.3) 0%, rgba(15, 23, 42, 0) 100%); border-radius: 24px; border: 1px solid rgba(30, 64, 175, 0.3); margin-bottom: 16px; }
.live-number { font-size: 80px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin: 8px 0; }
.update-text { font-size: 12px; color: #94a3b8; }
​/* Cards */
.card { background: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 16px; margin-bottom: 12px; }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.badge { font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px; }
.badge-morning { background: #fbbf24; color: #0f172a; }
.badge-evening { background: #ef4444; color: #ffffff; }
​.card-body { display: flex; justify-content: space-between; align-items: flex-end; }
.label { font-size: 10px; color: #94a3b8; margin-bottom: 2px; }
.val { font-size: 15px; font-weight: bold; font-family: monospace; }
.num-2d { font-size: 28px; font-weight: 900; color: #fbbf24; font-family: monospace; }
​.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
​/* Navigation Bar */
.navbar { position: fixed; bottom: 12px; left: 12px; right: 12px; max-width: 456px; margin: 0 auto; background: rgba(15, 23, 42, 0.95); border: 1px solid #334155; backdrop-filter: blur(10px); border-radius: 16px; display: flex; justify-content: space-around; padding: 6px; z-index: 100; }
.nav-item { flex: 1; border: none; background: transparent; color: #94a3b8; padding: 8px 0; border-radius: 12px; font-size: 11px; font-weight: 600; cursor: pointer; text-align: center; }
.nav-item.active { color: #fbbf24; background: rgba(251, 191, 36, 0.1); }
​/* Modal */
.modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(4px); z-index: 200; align-items: center; justify-content: center; padding: 16px; }
.modal-content { background: #1e293b; border: 1px solid #475569; border-radius: 20px; padding: 20px; width: 100%; max-width: 360px; }
.input-group { margin-bottom: 12px; }
.input-group label { display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 4px; }
.input-group input { width: 100%; background: #0f172a; border: 1px solid #334155; padding: 10px; border-radius: 10px; color: #fff; outline: none; }
.btn-submit { width: 100%; background: #fbbf24; color: #0f172a; border: none; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer; margin-top: 8px; }
</style>
</head>
<body>
​<!-- Header -->
<div class="header">
<h1>Myanmar 2D & 3D</h1>
<div style="display:flex; align-items:center; gap:10px;">
<span class="live-tag">● LIVE</span>
<button class="gear-btn" onclick="toggleAdmin(true)">⚙</button>
</div>
</div>
​<div class="container">
​<!-- LIVE TAB -->
<div id="tab-live" class="page active">
<div class="live-box">
<div id="live-twod" class="live-number">--</div>
<div class="update-text">Updated: <span id="update-time">--:--:-- PM</span></div>
</div>
​<div class="card">
<div class="card-header">
<span>☀️ 12:01 PM</span>
<span class="badge badge-morning">MORNING</span>
</div>
<div class="card-body">
<div>
<div class="label">SET</div>
<div id="morning-set" class="val">1,494.41</div>
</div>
<div>
<div class="label">VALUE</div>
<div id="morning-value" class="val">40,497.76</div>
</div>
<div>
<div class="label">2D</div>
<div id="morning-twod" class="num-2d">17</div>
</div>
</div>
</div>
​<div class="card" style="border-color: rgba(59, 130, 246, 0.4);">
<div class="card-header">
<span>🌙 4:30 PM</span>
<span class="badge badge-evening">EVENING LIVE</span>
</div>
<div class="card-body">
<div>
<div class="label">SET</div>
<div id="evening-set" class="val">1,496.74</div>
</div>
<div>
<div class="label">VALUE</div>
<div id="evening-value" class="val">53,258.99</div>
</div>
<div>
<div class="label">2D</div>
<div id="evening-twod" class="num-2d">--</div>
</div>
</div>
</div>
​<div class="grid-2">
<div class="card">
<div style="font-size:12px; margin-bottom:8px; font-weight:bold;">9:30 AM</div>
<div style="display:flex; justify-content:space-between; text-align:center;">
<div style="flex:1;">
<div class="label">MODERN</div>
<div class="val">84</div>
</div>
<div style="flex:1;">
<div class="label">INTERNET</div>
<div class="val">51</div>
</div>
</div>
</div>
​<div class="card">
<div style="font-size:12px; margin-bottom:8px; font-weight:bold;">2:00 PM</div>
<div style="display:flex; justify-content:space-between; text-align:center;">
<div style="flex:1;">
<div class="label">MODERN</div>
<div class="val">02</div>
</div>
<div style="flex:1;">
<div class="label">INTERNET</div>
<div class="val">28</div>
</div>
</div>
</div>
</div>
</div>
​<!-- 2D TAB -->
<div id="tab-2d" class="page">
<h2 style="font-size:16px; margin-bottom:12px; color:#fbbf24;">📊 2D ထွက်ဂဏန်း မှတ်တမ်း</h2>
<div class="card">
<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #334155;">
<span style="font-size:13px; color:#94a3b8;">10-11-2026 (Morning)</span>
<span style="font-weight:bold; color:#fbbf24;">17</span>
</div>
<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #334155;">
<span style="font-size:13px; color:#94a3b8;">09-11-2026 (Evening)</span>
<span style="font-weight:bold; color:#fbbf24;">48</span>
</div>
<div style="display:flex; justify-content:space-between; padding:8px 0;">
<span style="font-size:13px; color:#94a3b8;">09-11-2026 (Morning)</span>
<span style="font-weight:bold; color:#fbbf24;">23</span>
</div>
</div>
</div>
​<!-- 3D TAB -->
<div id="tab-3d" class="page" style="text-align:center; padding: 20px 0;">
<div class="card" style="padding:30px 16px;">
<h2 style="font-size:18px; margin-bottom:6px;">🎲 3D ထွက်ဂဏန်း</h2>
<p style="font-size:12px; color:#94a3b8; margin-bottom:20px;">ယခုလအတွက် ၃ လုံး ထွက်ဂဏန်း</p>
<div style="background:#0f172a; padding:16px; border-radius:16px; border:1px solid #fbbf24; display:inline-block; min-width:160px;">
<span id="display-3d" style="font-size:48px; font-weight:900; color:#fbbf24; font-family:monospace;">932</span>
</div>
</div>
</div>
​<!-- GIFT TAB -->
<div id="tab-gift" class="page" style="text-align:center; padding: 20px 0;">
<div class="card" style="padding:30px 16px;">
<h2 style="font-size:18px; margin-bottom:6px;">🎁 ယနေ့ လက်ဆောင်ဂဏန်း</h2>
<div style="background:#0f172a; padding:20px; border-radius:16px; margin-top:16px;">
<div id="display-gift-num" style="font-size:40px; font-weight:bold; color:#fbbf24; font-family:monospace;">88</div>
<p id="display-gift-note" style="font-size:12px; color:#94a3b8; margin-top:8px;">Admin ထည့်သွင်းထားသော ဂဏန်း</p>
</div>
</div>
</div>
​<!-- ANALYTICS TAB -->
<div id="tab-analytics" class="page">
<h2 style="font-size:16px; margin-bottom:12px; color:#fbbf24;">📈 Analytics Analysis</h2>
<div class="card">
<p style="font-size:13px; color:#cbd5e1; margin-bottom:12px;">ယခုအပတ် အထွက်များသော ထိပ်ဂဏန်းများ သုံးသပ်ချက်။</p>
<div class="grid-2" style="text-align:center;">
<div style="background:#0f172a; padding:12px; border-radius:10px;">
<div class="label">ထိပ်စီး</div>
<div style="color:#fbbf24; font-weight:bold;">4, 8, 9</div>
</div>
<div style="background:#0f172a; padding:12px; border-radius:10px;">
<div class="label">နောက်ပိတ်</div>
<div style="color:#fbbf24; font-weight:bold;">1, 2, 7</div>
</div>
</div>
</div>
</div>
​<!-- CALENDAR TAB -->
<div id="tab-calendar" class="page">
<h2 style="font-size:16px; margin-bottom:12px; color:#fbbf24;">📅 2D Calendar</h2>
<div class="card" style="text-align:center;">
<p style="font-size:12px; color:#94a3b8;">2D ပြက္ခဒိန် အချက်အလက်များ</p>
</div>
</div>
​</div>
​<!-- Admin Panel Modal -->
<div id="admin-modal" class="modal">
<div class="modal-content">
<h3 style="margin-bottom:16px; font-size:16px; color:#fbbf24;">Admin Control Panel</h3>
<div class="input-group">
<label>3D ဂဏန်း ပြင်ရန်</label>
<input type="text" id="input-3d" placeholder="ဥပမာ - 932">
</div>
<div class="input-group">
<label>လက်ဆောင်ဂဏန်း ပြင်ရန်</label>
<input type="text" id="input-gift" placeholder="ဥပမာ - 88">
</div>
<div class="input-group">
<label>မှတ်ချက် ရေးရန်</label>
<input type="text" id="input-note" placeholder="စာသား ရေးရန်...">
</div>
<button class="btn-submit" onclick="saveAdminData()">သိမ်းဆည်းမည်</button>
<button class="btn-submit" style="background:#334155; color:#fff; margin-top:8px;" onclick="toggleAdmin(false)">ပိတ်မည်</button>
</div>
</div>
​<!-- Bottom Navigation Bar -->
<div class="navbar">
<button class="nav-item active" onclick="changeTab('live', this)">Live</button>
<button class="nav-item" onclick="changeTab('2d', this)">2D</button>
<button class="nav-item" onclick="changeTab('3d', this)">3D</button>
<button class="nav-item" onclick="changeTab('gift', this)">Gift</button>
<button class="nav-item" onclick="changeTab('analytics', this)">Analytics</button>
<button class="nav-item" onclick="changeTab('calendar', this)">Calendar</button>
</div>
​<script>
window.changeTab = function(tabName, element) {
var pages = document.querySelectorAll('.page');
for (var i = 0; i < pages.length; i++) {
pages[i].classList.remove('active');
}
​var navs = document.querySelectorAll('.nav-item');
for (var j = 0; j < navs.length; j++) {
navs[j].classList.remove('active');
}
​var selectedPage = document.getElementById('tab-' + tabName);
if (selectedPage) {
selectedPage.classList.add('active');
}
if (element) {
element.classList.add('active');
}
};
​window.toggleAdmin = function(show) {
var modal = document.getElementById('admin-modal');
if (modal) {
modal.style.display = show ? 'flex' : 'none';
}
};
​window.saveAdminData = function() {
var val3d = document.getElementById('input-3d').value.trim();
var valGift = document.getElementById('input-gift').value.trim();
var valNote = document.getElementById('input-note').value.trim();
​if (val3d) {
document.getElementById('display-3d').innerText = val3d;
localStorage.setItem('my_3d', val3d);
}
if (valGift) {
document.getElementById('display-gift-num').innerText = valGift;
localStorage.setItem('my_gift_num', valGift);
}
if (valNote) {
document.getElementById('display-gift-note').innerText = valNote;
localStorage.setItem('my_gift_note', valNote);
}
toggleAdmin(false);
alert('အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ!');
};
​function loadSavedData() {
var saved3d = localStorage.getItem('my_3d');
var savedGift = localStorage.getItem('my_gift_num');
var savedNote = localStorage.getItem('my_gift_note');
​if (saved3d) document.getElementById('display-3d').innerText = saved3d;
if (savedGift) document.getElementById('display-gift-num').innerText = savedGift;
if (savedNote) document.getElementById('display-gift-note').innerText = savedNote;
}
​function startRealtimeSimulation() {
setInterval(function() {
var now = new Date();
var sec = now.getSeconds();
​var dynamicSet = (1496.74 + (sec % 10) * 0.05).toFixed(2);
var dynamicVal = (53258.99 + sec * 12.5).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var dynamic2D = String((now.getMinutes() + sec) % 100).padStart(2, '0');
​var elLive = document.getElementById('live-twod');
var elEve2d = document.getElementById('evening-twod');
var elEveSet = document.getElementById('evening-set');
var elEveVal = document.getElementById('evening-value');
var elTime = document.getElementById('update-time');
​if (elLive) elLive.innerText = dynamic2D;
if (elEve2d) elEve2d.innerText = dynamic2D;
if (elEveSet) elEveSet.innerText = dynamicSet;
if (elEveVal) elEveVal.innerText = dynamicVal;
if (elTime) elTime.innerText = now.toLocaleTimeString();
}, 1000);
}
​window.onload = function() {
loadSavedData();
startRealtimeSimulation();
};
</script>
</body>
</html>
