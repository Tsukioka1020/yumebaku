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
document.addEventListener("turbo:load", function () {
  const clockHour = document.getElementById("clockHour");
  if (!clockHour) return;

  updateClock();
  setInterval(updateClock, 1000);
  document.getElementById("serifText").style.transition = "opacity 0.4s ease";
  rotateSerif();
  setInterval(rotateSerif, 30000);
});

// ばくらちゃんのランダムセリフ（時間帯別）
const SERIFS_MORNING = [
  "おはよ〜　ちゃんと眠れた？<br>ばくら、ずっとそばにいたよ",
  "朝だよ〜　今日も一日<br>がんばろうね",
  "ゆめのあとかたづけ、<br>てつだってあげようか？",
];

const SERIFS_NOON = [
  "お昼だね〜　ちょっと眠くなる<br>時間だよね、わかるよ",
  "今日見た夢、覚えてる？<br>忘れないうちに話してね",
  "ばくら、お腹すいてきちゃった<br>夢、食べさせて〜",
];

const SERIFS_EVENING = [
  "そろそろ眠る時間が<br>近づいてきたね",
  "今日はどんな一日だった？<br>夜は静かに話を聞くよ",
  "怖い夢なんて　もったいない<br>ばくらに食べさせてくれたらよかったのに",
];

const SERIFS_NIGHT = [
  "だいじょうぶ　だいじょうぶ<br>ばくらちゃんが　怖い夢　ぜ〜んぶ<br>食べちゃったんだからさ！",
  "夜中だね…静かな時間<br>ゆっくりおやすみなさい",
  "悪夢は　全部ばくらのごはん<br>だから安心して眠っていいよ",
];

function getSerifsByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 10) return SERIFS_MORNING;
  if (hour >= 10 && hour < 17) return SERIFS_NOON;
  if (hour >= 17 && hour < 23) return SERIFS_EVENING;
  return SERIFS_NIGHT;
}

function rotateSerif() {
  const serifs = getSerifsByTime();
  const text = serifs[Math.floor(Math.random() * serifs.length)];
  const el = document.getElementById("serifText");
  el.style.opacity = "0";
  setTimeout(() => {
    el.innerHTML = text;
    el.style.opacity = "1";
  }, 400);
}

// 設定モーダル
document.addEventListener("turbo:load", function () {
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsOverlay = document.getElementById("settingsOverlay");
  const settingsCloseBtn = document.getElementById("settingsCloseBtn");

  if (!settingsBtn) return;

  settingsBtn.addEventListener("click", function () {
    settingsOverlay.classList.add("visible");
  });

  settingsCloseBtn.addEventListener("click", function () {
    settingsOverlay.classList.remove("visible");
  });

  settingsOverlay.addEventListener("click", function (e) {
    if (e.target === settingsOverlay) {
      settingsOverlay.classList.remove("visible");
    }
  });
});

// 初回ログインガイド
document.addEventListener("turbo:load", function () {
  const guideCloseBtn = document.getElementById("guideCloseBtn");
  const guideOverlay = document.getElementById("guideOverlay");

  if (!guideCloseBtn) return;

  guideCloseBtn.addEventListener("click", function () {
    guideOverlay.classList.remove("visible");
  });
});
