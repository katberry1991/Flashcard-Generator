//console.log message message to verify files are connected properly
console.log("Harry Potter Trivia is Linked Correctly");

//'exports' allows information to be accessed by other files. basicCard.js in this case.
//this variable is set to an array of objects. The array allows function to count through items listed in array. 
//for the purpose of this activity, the basicCard.js can run through this array in order to display a question and answer for the player.
exports.basicTrivia = [{
	//'front' and 'back' are set so that when cards are created in basicCard, 'front' can equate to question and 'back' can equate the answer.
	front: "What is the name of Harry Potter's owl?"
	back: "Hedwig"
},

{

	front: "What is the house Harry Potter is assigned to at Hogwarts?"
	back: "Gryffindor"
},

	{

		front: "Who is the groundskeeper for Hogwarts?"
		back: "Hagrid"
	},

	{

		front: "What are the names of Harry's two friends?"
		back: "Ron and Hermoine"

	},

	{

		front: "What do Hermoine's parents' occupation?"
		back: "Dentists"

	},

	{

		front: "What is the name of Harry's godfather?"
		back: "Sirius Black"

	}];