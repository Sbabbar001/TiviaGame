$(document).ready(() => {
	console.log('Hello World!')
});
      // Timer of the game 
secondsLeft = 10;
      // True and False buttons
var trueButton = "<button id='true'>True</button>";
var falseButton = "<button id='false'>False</button>"
      // Questions of the game
var questions = ['The sky is blue','The Hilton is the tallest building in San Francisco','water is wet','Otters have the thickest hair of all the animals','sealions are able to sleep underwater'];
      // Answers of the questions
var answers = ['true', 'false', 'true','true','false'];


function startGame(){
  var currentQuestion = 0;
  var score = 0;
  timer();
  $('#start').hide();
  $('#true-or-false').append(trueButton, falseButton);
  $('#question').append(questions[currentQuestion]);
      //check if they click true or false
      //check if what they click is correct
      //do whatever you want to do if it's correct/incorrect
  $('#true, #false').click(function(e){
   var answer = ($(e.target).attr('id'));
    if(answer === answers[currentQuestion]){
      score++;
      $('#score').text(score);
    }
    currentQuestion++;
    $('#question').text(questions[currentQuestion]);
  })
}
    // Timer of the game
function timer() {
  setInterval(function() {
    $("#timer").text(secondsLeft);
    secondsLeft--;
    checkTimeLeft(secondsLeft);
  }, 1000);
};

function checkTimeLeft(seconds) {
  if (seconds < 0) {
    //end the game
    $("#timer").text("You ran out of time!");
    $('#true-or-false, #question').remove();
  }
}
    // Start button of the game
$('button').click(startGame)