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

//Create variable for number of correct answers to start at 0
	var score = 0

//Create variable for the current question to start at 0
	var currentQuestion = 0


//Push first set of questions to page when button clicked
//NOTE: run option stuff in a loop ...  $('#option1).val(0);
//NOTE: run append in seperate function that loops all questions starting with question "0"
	$('#start').click(function(e){
		e.preventDefault();
		$('#questions').append(questions[0].question);
		$('#option1').append(questions[currentQuestion].options[0]);
		$('#option2').append(questions[currentQuestion].options[1]);
		$('#option3').append(questions[currentQuestion].options[2]);
		$('#option4').append(questions[currentQuestion].options[3]);
		$('li').removeClass('hide');
		$('button').removeClass('hide');
		$('#start').remove();
		});


//Save guess with user submission as a value
	$('#submit').on('click', function (e) {
		e.preventDefault();
        var Guess = (+$('input[name="answer"]:checked').val());
        console.log(Guess);
        checkGuess(Guess)
});

	   
//Check guess against actual answer
	function checkGuess(Guess) {
		console.log("run: right or wrong?");
		console.log(currentQuestion);
		if (Guess === questions[currentQuestion].answer) {
			console.log("right!");
			score++;
			console.log(score);
			currentQuestion++
			nextSet()
		} else {
			console.log("wrong!")
			currentQuestion++
			nextSet()
		}
	}


//Push next set of questions
	function nextSet() {
		if(currentQuestion<=4) {
			console.log("run: next set of questions")
			$('#questions').text(questions[currentQuestion].question);
			$('#option1').text(questions[currentQuestion].options[0]);
			$('#option2').text(questions[currentQuestion].options[1]);
			$('#option3').text(questions[currentQuestion].options[2]);
			$('#option4').text(questions[currentQuestion].options[3]);
		} else {
			results()
		}
	}


//Provide results
	function results() {
		console.log("You got " + score + " out of 5 correct!")
		$('#questions').addClass('hide');
		$('li').addClass('hide');
		$('button').addClass('hide');
		$('#results').html('You got ' + score + ' out of 5 correct!<br><br><a href="http://garsi.github.io/Quiz-App-Seattle">Restart Quiz</a>');
	}


});