//Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын оноог хадгалдаг хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// Math.floor() - Тоог доош нь тоймлоно. Ж.нь: 1,1=1   2.8=2
// Math.random - 0-1 хүртэл санамсаргүйгээр тоог гаргана
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>;
//DOM дотроос class, ID-р хайж олохын тулд querySelector-г ашиглана.
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>ert</em>";

// Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// Шоог алга болгохын тулд DOM дотроос class-р нь хайж олоод css-н display:none; болгоно.
document.querySelector(".dice").style.display = "none";
console.log("Шоо: " + dice);
