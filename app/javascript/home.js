// 時計
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("clockHour").textContent = h;
  document.getElementById("clockMin").textContent = m;
  document.getElementById("clockHourM").textContent = h;
  document.getElementById("clockMinM").textContent = m;
}
updateClock();
setInterval(updateClock, 1000);

// ばくらちゃんのランダムセリフ
const SERIFS = [
  "だいじょうぶ　だいじょうぶ<br>ばくらちゃんが　怖い夢　ぜ〜んぶ<br>食べちゃったんだからさ！",
  "んー？　また変な夢見たの？<br>ぜんぶ話して、ばくらが食べてあげるから",
  "おはよ〜　ちゃんと眠れた？<br>ばくら、ずっとそばにいたよ",
  "怖い夢なんて　もったいない<br>ばくらに食べさせてくれたらよかったのに",
  "悪夢は　全部ばくらのごはん<br>だから安心して眠っていいよ",
];

function rotateSerif() {
  const text = SERIFS[Math.floor(Math.random() * SERIFS.length)];
  const el = document.getElementById("serifText");
  el.style.opacity = "0";
  setTimeout(() => {
    el.innerHTML = text;
    el.style.opacity = "1";
  }, 400);
}

document.getElementById("serifText").style.transition = "opacity 0.4s ease";
setInterval(rotateSerif, 30000);
