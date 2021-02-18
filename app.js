// Тоглоомны бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

//Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;
// 2 тоглогчийн цуглуулсан оноонууд
var scores;
// Идэвхитэй тоглогчийн цуглуулж байгаа ээлжийн оноо.
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалъя
// Кодыг олон copy - дохоос зайлсхийж global хувьсагчид оноогоод цаашид хаана ч дуудах боломжтой хялбар болгоё
var diceDom = document.querySelector(".dice");

// Програмыг эхлүүлэх
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  //Тоглоом эхэллээ гэдэг төлөвт оруулна.
  isNewGame = true;

  //Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;
  // Тоглогчдын оноог хадгалдаг хувьсагч
  scores = [0, 0];
  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Програм эхлэхэд бэлтгэж тоглогчдыэ бүх оноог 0 болгоё
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  //
  if (isNewGame) {
    // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургыг дэлгэцнд харуулна
    diceDom.style.display = "block";
    // Буусан санамсаргүй тоонд харгалзах шооны зургыг вэб дээр гаргаж өгнө.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1-с ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
      // 1-с ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

      // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New Game товчийг дарна уу");
  }
});
// Hold товчны event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Уг тоглогчийн цуглуулсан ээлжний оноог global оноо дээр нь нэмж өгнө.
    /*
    scores[0] = scores[0] + roundScore;
    scores[1] = scores[1] + roundScore;
    */
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= 100) {
      // Тоглоомыг дууссан төлөвт оруулна
      isNewGame = false;

      // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийн ээлжийг солино.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New Game товчийг дарна уу");
  }
});

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлнэ.
function switchToNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // toggle -г ашиглаж улаан цэг байвал хасаж, байхгүй бол нэмдэг болно.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгох
  diceDom.style.display = "none";
}

// New Game буюу Шинэ тоглоом эхлүүлэх товчны event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
