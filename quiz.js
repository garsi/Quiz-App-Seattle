$(document).ready(function() {

//Define questions object
	var questions = [{
			question: 'How tall is the Space Needle?',
			options: ['1015 feet', '375 feet', '605 feet', '1500 feet'],
			answer: 2 },
			{
			question: 'When did the Pike Place Market open?',
			options: ['1900', '1907', '1912', '1923'],
			answer: 1 },
			{
			question: 'Which of the following is NOT a sister city of Seattle?',
			options: ['Guayaquil, Ecuador', 'Galway, Ireland', 'Kobe, Japan', 'Mazatlán, Mexico'],
			answer: 0 },
			{
			question: "Which pro sport's team won national championships in 2004 and 2010?",
			options: ['Seahawks', 'Sounders', 'Sonics', 'Storm'],
			answer: 3 },
			{
			question: "Seattle was the first city where police officers ride these:",
			options: ['Motorcycles', 'Segways', 'Bicycles', 'Skateboards'],
			answer: 2 }
			];


//TESTING
	console.log(questions[1].options[2]);


//Create variable for number of correct answers to start at 0
	var score = 0

//Create variable for the current question to start at 0
	var currentQuestion = 0

//Create variable for the current question to start at 1
	var questionNumber = 1


//Push first set of questions to page when button clicked
	$('#start').click(function(e){
		e.preventDefault();
		$('li').removeClass('hide');
		$('button').removeClass('hide');
		$('#start').remove();
		nextSet();
		});


//Save guess with user submission as a value
	$('#submit').on('click', function (e) {
		e.preventDefault();
        var guess = (+$('input[name="answer"]:checked').val());
        $('input[name="answer"]:checked').attr('checked', false);
        console.log(guess);
        validate(guess);
});


//Validate user has selected an answer
	function validate(guess) {
		if(isNaN(guess)) {
			$('#error').html("<em>Oops, you didn't select an answer. Please try again.</em></br>");
	  	} else {
		  	console.log("Item validated");
		  	$('#error').html('');
		  	checkGuess(guess);
	  	}
	}

	   
//Check guess against actual answer
	function checkGuess(guess) {
		console.log("run: right or wrong?");
		console.log(currentQuestion);
		if (guess === questions[currentQuestion].answer) {
			console.log("right!");
			score++;
			console.log(score);
			currentQuestion++
			questionNumber++
			$('.progress').eq(currentQuestion-1).addClass('progressright');
			$('#theanswer').text("Nice! " + questions[currentQuestion-1].options[questions[currentQuestion-1].answer] + " was correct.");
			nextSet();
		} else {
			console.log("wrong!");
			currentQuestion++
			questionNumber++
			$('.progress').eq(currentQuestion-1).addClass('progresswrong');
			$('#theanswer').text("Bummer! " + questions[currentQuestion-1].options[questions[currentQuestion-1].answer] + " was correct.");
			nextSet();
		}
	}


//Push next set of questions
	function nextSet() {
		if(currentQuestion<=4) {
			console.log("run: next set of questions")
			$('.progress').eq(currentQuestion).addClass('progresson');
			$('#number').text("Q" + questionNumber + ")");
			$('#questions').text(questions[currentQuestion].question);
			var optionslen=questions[currentQuestion].options.length;
			for(var i=0, j=1; i<=optionslen; i++, j++){
				$('#option'+j).text(questions[currentQuestion].options[i]);
			}
		} else {
			results();
		}
	}


//Provide results
	function results() {
		console.log("You got " + score + " out of 5 correct!")
		$('#questions').addClass('hide');
		$('li').addClass('hide');
		$('button').addClass('hide');
		$('#number').addClass('hide');
		$('#results').html('You got ' + score + ' out of 5 correct!<br><br><a href="http://garsi.github.io/Quiz-App-Seattle">Restart Quiz</a>');
	}


});