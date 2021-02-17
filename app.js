//Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын оноог хадгалдаг хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// Math.floor() - Тоог доош нь тоймлоно. Ж.нь: 1,1=1   2.8=2
// Math.random - 0-1 хүртэл санамсаргүйгээр тоог гаргана
var diceNumber = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>;
/*DOM дотроос class, ID-р хайж олохын тулд querySelector-г ашиглана. Мөн ID-р хайж байгаа тохиолдолд getElementById -р хайвал илүү хурдан ажилладаг.  
window.document.querySelector("#score-0").textContent = dice;
*/

// document.querySelector("#score-1").innerHTML = "<em>ert</em>";

// Програм эхлэхэд бэлтгэж тоглогчдыэ бүх оноог 0 болгоё
// document.document.querySelector("#score-0").textContent = 0;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Шоог алга болгохын тулд DOM дотроос class-р нь хайж олоод css-н display:none; болгоно.
document.querySelector(".dice").style.display = "none";

/*Roll dice товчийг дарахад ямар Event /үйл явдал/ болохыг нэмж өгнө. addEventListener-г дуудна. Үүн дотроо 2 argument дамжуулдаг. Эхнийх нь ямар event дээр хариу үйлдэл үзүүлэхийг, дараа нь тухайн эвэнтээр юу хийхээ зааж өгнө. Ж.нь : Хулгана roll dice товчийг click/дарах үйлдэл/ хийхэд ShooShid функц ажиллана.

document.querySelector(".btn-roll").addEventListener("click", shooShid);
function shooShid() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  alert("Шоо буулаа: " + diceNumber);
}
*/
// Кодыг олон copy-дохоос зайлсхийж global хувьсагчид оноогоод цаашид хаана ч дуудах боломжтой хялбар болгоё
var diceDom = document.querySelector(".dice");
// shooShid функцыг зөвхөн 1 л удаа ашиглаж байгаа тул Anonymous функцаар /нэргүй функцаар/сольё
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургыг дэлгэцнд харуулна
  diceDom.style.display = "block";
  // Буусан санамсаргүй тоонд харгалзах шооны зургыг вэб дээр гаргаж өгнө.
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1-с ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1-с ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
    // хэрэв идэвхитэй тогтогч нь 0 байвал идэвхитэй тоглогчийг 1 болго.
    /*
    if (activePlayer === 0) {
      activePlayer = 1;
      // Үгүй бол идэвхитэй тоглогчийг 0 болго
    } esle{
      activePlayer = 0;
    }
    */
    // Дээрх кодын арай товчоор гурвалсан оператор ашиглан бичвэл
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    /*Улаан цэгийг идэвхигүй болсон тоглогчоос хасаад идэвхитэй тоглогч руу шилжүүлэх  -- remove, -- add
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
    */
    // Гэхдээ дээрх remove, add -н дутагдалтай нь дандаа player1-с хасаад player2 дээр нэмдэг болчихлоо. тиймээс toggle -г ашигласнаар улаан цэг байвал хасаж, байхгүй бол нэмдэг болно.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // Шоог түр алга болгох
    diceDom.style.display = "none";
  }
});
