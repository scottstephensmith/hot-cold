$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  /*--- Defining Global Variables --*/
  var numGen;
  var newGuess;
  var checkGuess;
  var guessCount;
  
  /* --- Random Number Gnerator --- */
  numGen = function(){
    number = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is " + number);
    return numGen;
    };
  
  /*--- New Game Setup, calls number generator automatically ---*/
  newGame = function(){
    console.log("New game started!")
    guessCount = 0
    $("#count, #feedback, #guessList").contents().remove();
    $("#count").append(guessCount);
    $("#feedback").append('Make your guess!');
    $("userGuess").val('')
    numGen();
  };
  
  newGame();
  
  /*--- New Game Button ---*/
  $(".new").click(function(){
    newGame();
  });
  
  /*--- guessing and returning feedback ---*/
  $("#guessButton").click(function(){
    newGuess = $('input').val();
    console.log("User guessed " + newGuess);
    
    if (isNaN(newGuess) || newGuess % 1 !== 0) {
      writeFeedback("What!? That's not a number.");
    } else if(newGuess > 100 || newGuess < 0){
      writeFeedback("The number has to be between 0 and 100!");
    } else if(newGuess === '') {
      writeFeedback("You have to provide a number!");
    } else {
        trackGuess();
        listGuess();
        checkGuess = (Math.abs(newGuess - number));
        if (checkGuess === 0) {
          console.log("User won!")
          writeFeedback("You win!");
        } else if (checkGuess <= 5) {
          writeFeedback("Oh so hot!");
        } else if (checkGuess <= 10) {
          writeFeedback("Definitely warm.");
        } else if (checkGuess <= 20) {
          writeFeedback("Warm, sort of.");
        } else if (checkGuess <= 30) {
          writeFeedback("It's chilly in here.");
        } else {
          writeFeedback("Freezing! Not even close...");
        }
      $('#userGuess').val('');
      return false;    
    }
    $('#userGuess').val('');
    return false;
  });
	
  function writeFeedback (feedback) {
    $('#feedback').text(feedback);
  }
  function trackGuess () {
    guessCount += 1;
    $('#count').text(guessCount);
  }
  function listGuess () {
    $('#guessList').append('<li>' + newGuess + '</li>');
  }

});
