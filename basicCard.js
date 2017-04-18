/*'inquirer' is a node package that allows the user or player to interact with the application. i.e. 'What is Harry's owl's 
name?', user enters guess and receives information from application (whether they were correct or incorrect and the answer if incorrect.)*/
var inquirer = require("inquirer");
//fs is node's file module (package) that contains basic operations such as read, open, etc. 
var fs = require("fs");
/*in node, each file is considered a its separate module, 'require' allows a file to access another file's information. In this instance,
the basicCard.js file('module') needs to access info from the harryPotterTrivia.js file('module') in order to generate questions/answers
for the player.*/
var basicCard = require("./harryPotterTrivia.js");
//'count' and 'score' variables to keep track of how many answers play guessed corrrectly.
var count = 0;
var score = 0;
//indicates that game should begin.
//var startgame();

var Question = function () {
	//This line is saying that if the count is less than the number of items in the basic.Trivia array, 
	if (count < basicCard.basicTrivia.length) {
		//'inquirer.prompt' allows user to enter information, i.e. their guess.
		inquirer.prompt([{
			name: "input",
			message: basicCard.basicTrivia[count].front
			/*'.then' is used so that user input can be utilized. For this application, user input will be compared against asnwers in 
			the harryPotterTrivia.js file in order to confirm if they have the correct answer or not. If they do not, then they will 
			see the correct answer. If the do guess the correct answer, their score increases by 1.*/
		}]).then(function (answers) {
			//Line 28 is specifying that if the answer the user inputs matches the 'back' of the card, then the user should see 'Correct.'
			if (answers.input === basicCard.basicTrivia[count].back) {
				console.log("Correct");
				score++;
			} else {
				/*the 'else' statement on lines 31-33 is saying that if the user's input or guess does not match the back of the card that
				they will see 'Incorrect + the correct answer + what their score'.*/
				console.log("Incorrect...The correct answer is " + basicCard.basicQuestions[count].back + " Current score is = " + score);
			}
			count++;
			Question();
		});
		//These last two else statements are used to end the game or to reatart the game if the user enters 'Yes' when prompted. 
	} else {
		var gameOver = true;
		count = 0;
		if (gameOver === true) {
			inquirer.prompt([{
				type: "list",
				name: "game",
				message: "Your score was " + score + " answers correct. Play again?",
				choices: ["Yes", "No"]
			}]).then(function (answer){
				if (answer.game === "Yes") {
					//Line 52 restarts game if 'Yes' is entered.
					startgame();
					endGame = false;
				} else {
					console.log("Okay");
				}
			});
		}
	}
};

