// Global Variables
var timeLeft = 20;
var timeInterval;
var questionIndex = 0;
var correctAnsCount = 0;
var incorrectAnsCount = 0;

// Question Object Array
var questionsArray = [
  {
    // question 1
    question: "In the anime show, Naruto, who is Madara Uchia's known rival?",
    ans: {
      a: "Tobirama",
      b: "Hashirama",
      c: "Minato",
      d: "Tsunade"
    },
    correctAnswer: "B",
    display: "Hashirama"
  },
  {
    // question 2
    question:
      "In the anime Dragonball Z how many times has Goku died in the series",
    ans: {
      a: "2",
      b: "7",
      c: "10",
      d: "All of the above"
    },
    correctAnswer: "a",
    display: "2"
  },
  {
    // question 3
    question:
      "In the Anime One Punch Man who is Silverfang Bang's rogue student?",
    ans: {
      a: "Genos",
      b: "Garou",
      c: "Blast",
      d: "Bomb"
    },
    correctAnswer: "b",
    display: "Garou"
  },
  {
    // question 4
    question:
      "In the anime Rise of the Shield Hero which character had their name changed to the word Bitch?",
    ans: {
      a: "Raphtalia",
      b: "Fohl",
      c: "Malty",
      d: "Filo"
    },
    correctAnswer: "c",
    display: "Mexico"
  },
  {
    // question 5
    question:
      "In the Anime Mobile Suit Gundam Iron Blooded Orphans which character got their revenge after the death of Lafter?",
    ans: {
      a: "Naze",
      b: "Azee",
      c: "Mikazuki",
      d: "Akihiro"
    },
    correctAnswer: "d",
    display: "Akihiro"
  },
  {
    // question 6
    question: "In the Anime Inuyasha what was Naraku original name?",
    ans: {
      a: "Onigumo",
      b: "Shisui",
      c: "Miroku",
      d: "Bankotsu"
    },
    correctAnswer: "a",
    display: "Onigumo"
  },
  {
    // question 7
    question:
      "In the Anime Seven Deadly Sins who was the strongest sin in the group?",
    ans: {
      a: "Ban",
      b: "Escanor",
      c: "Meliodas",
      d: "Merlin"
    },
    correctAnswer: "B",
    display: "Escanor"
  },
  {
    // question 8
    question:
      "In the anime Cowboy Bebop what was Spike's final words in the series?",
    ans: {
      a: "The Dream Was All Over",
      b: "Bang",
      c: "I've Been Seeing The Past In One Eye",
      d: "See You Space Cowboy"
    },
    correctAnswer: "b",
    display: "Bang"
  },
  {
    // question 9
    question:
      "In the anime My Hero Academia How many users were there for All For One?",
    ans: {
      a: "2",
      b: "8",
      c: "9",
      d: "None"
    },
    correctAnswer: "A",
    display: "2"
  },
  {
    // question 10
    question:
      "In the anime One Piece Who is known as the World's Worse Criminal?",
    ans: {
      a: "Monkey D Luffy",
      b: "Monkey D Dragon",
      c: "Big Mom",
      d: "Gol D Roger"
    },
    correctAnswer: "b",
    display: "Monkey D Dragon"
  }
];

// Gamaplay Functions

// Question Timer Function
function timerCountdown() {
  // set the timer to 20seconds
  timeLeft = 20;
  // clear the time interval variable
  clearInterval(timeInterval);
  // use setInterval
  timeInterval = setInterval(function() {
    // decrement the timeLeft
    timeLeft--;
    // display the timeLeft to the time left div
    $("#remaining-time").html(timeLeft);
    $("#remaining-time").show();
    // if time runs out
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

$(
  "#restart, #submit, #next, #correct, #incorrect, #unaswered, #remaining-time, #qestion-div"
).hide();
// Game Start
$("#start").on("click", gameStart);

function gameStart() {
  $("#start").hide();
  $("#remaining-time #submit").show();
  questionDisplay();
}

function questionDisplay() {
  // show questions and answers
  $("#qestion-div, #answer-div, #a, #b, #c, #d").show();
  // start timer
  timerCountdown();
  // access object and show question and answers
  $("#question-div").html(questionsArray[questionIndex].question);
  // console.log(questionsArray[questionIndex].question);
  $("#answer1").html(questionsArray[questionIndex].ans.a);
  $("#answer2").html(questionsArray[questionIndex].ans.b);
  $("#answer3").html(questionsArray[questionIndex].ans.c);
  $("#answer4").html(questionsArray[questionIndex].ans.d);
}

// click the answers .answers
$(".answers").click(function() {
  //    run a showAnswer function
  showAnswer();
  // need to store the correct answer into a variable then compare
  var userChoice = $(this).attr("id");
  var answer = questionsArray[questionIndex].correctAnswer;

  // if user choice = answer increase correctcount if not increase incorrect
  if (userChoice === answer) {
    correctAnsCount++;
  } else {
    incorrectAnsCount++;
  }
  console.log("correct" + correctAnsCount + "incorrect" + incorrectAnsCount);
});

function showAnswer() {
  // hide the remaining time
  $("#remaining-time").hide();
  // show the next button
  // $("#next").show();
  // need to change answer to new answer
  var answer = questionsArray[questionIndex].correctAnswer;

  // handles iterating through the index when teh answer is shown
  if (questionIndex < 10) {
    // increast the question index
    questionIndex++;
    // update the game totals count
    scoreTotals();
    // display next question
    setTimeout(questionDisplay, 5000);
  }
}

function scoreTotals() {
  $("#correct").html("Corrrect:" + correctAnsCount);
  $("#incorrect").html("Incorrect" + incorrectAnsCount);
  $("#correct, #incorrect").show();
}
