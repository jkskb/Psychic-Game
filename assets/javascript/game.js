//User is promted that they have 9 guesses
alert('You have 9 guesses!!!')
	

//all set
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];


//Computer generates random number and saves for later
var randomLetter = function(length) {
    var letter = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
        for(i = 0; i < length; i++) {
            letter += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    var str = letter;
        return letter;
    }
    var rl = randomLetter(1);


//REMOVE THIS ONCE CODE IS COMPLETE - check for letter changing correctly
console.log("Our random letter is:" + rl);


//User choices, triggering evenst below - check if new computer letter is required on keyup of user's letter choice.
document.onkeyup = function(event) {

    if (rl === null) {
        rl = randomLetter(1);
        console.log("Our random letter is:" + rl); //REMOVE THIS ONCE CODE IS COMPLETE
    }
    
    var userGuess = event.key;
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//reset variables based on win (add 1 to wins, reset guesses to 9, clear guess choices, and rl to null), letter doesn't match(subtract 1 from guess count, add letter guessed to list), lose game (reset guesses to 9, add one to loss count, clear guess choices and rl to null)
if (options.indexOf(userGuess) > -1) {
    if (userGuess === rl) {
        wins ++;
        numGuesses = 9;
        guessChoices = [];
        rl = null;
    }
    else if (userGuess != rl) {
        numGuesses --;
        guessChoices.push(userGuess);
    }

if (numGuesses === 0) {
    numGuesses = 9;
    losses ++;
    guessChoices = [];
    rl = null;
}


//Adjusts counts of in HTML
var html = 
"<h1> The Psychic Game </h1>" +

"<p>Guess what letter I'm thinking of!</p>" +

"<p>Wins: " + wins + "</p>" +

"<p>Losses: " + losses + "</p>" +

"<p>Guesses remaining: " + numGuesses + "</p>" +

"<p>Letters Guessed thus Far: " + guessChoices.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;
}
};


//end of loop

