const ROCK = 0, PAPER = 1, SCISSORS = 2, LIZARD = 3, SPOCK = 4;
let playerSelection, computerSelection, yourscore = 0, computerscore = 0;
let round = 0;
const choices = ["rock", "paper", "scissor", "lizard", "spock"];
let choice_board = document.getElementsByClassName("Choices")
const checker = new Array(5);
for (var i = 0; i < checker.length; i++) {
    checker[i] = new Array(5);
}
checker[ROCK][ROCK] = 2; checker[ROCK][PAPER] = 1; checker[ROCK][SCISSORS] = 0; checker[ROCK][LIZARD] = 0; checker[ROCK][SPOCK] = 1;
checker[PAPER][ROCK] = 0; checker[PAPER][PAPER] = 2; checker[PAPER][SCISSORS] = 1; checker[PAPER][LIZARD] = 1; checker[PAPER][SPOCK] = 0;
checker[SCISSORS][ROCK] = 1; checker[SCISSORS][PAPER] = 0; checker[SCISSORS][SCISSORS] = 2; checker[SCISSORS][LIZARD] = 0; checker[SCISSORS][SPOCK] = 1;
checker[LIZARD][ROCK] = 1; checker[LIZARD][PAPER] = 0; checker[LIZARD][SCISSORS] = 1; checker[LIZARD][LIZARD] = 2; checker[LIZARD][SPOCK] = 0;
checker[SPOCK][ROCK] = 0; checker[SPOCK][PAPER] = 1; checker[SPOCK][SCISSORS] = 0; checker[SPOCK][LIZARD] = 1; checker[SPOCK][SPOCK] = 2;
function playRound(clicked_id) {
    // Set players choice
    playerSelection = choices.findIndex(c => c == clicked_id);
    // Random computer choice 
    computerSelection = Math.floor(Math.random() * 5);

    switch (checker[playerSelection][computerSelection]) {
        case (0):
            yourscore++;
            choice_board[0].style.backgroundColor = "green";
            choice_board[0].innerHTML = "You selected " + choices[playerSelection].toUpperCase() +
                " while Sheldon selects " + choices[computerSelection].toUpperCase() + ".";
            break;
        case (1):
            computerscore++;
            choice_board[0].style.backgroundColor = "red";
            choice_board[0].innerHTML = "You selected " + choices[playerSelection].toUpperCase() +
                " while Sheldon selects " + choices[computerSelection].toUpperCase() + ".";
            break;
        default:
            choice_board[0].style.backgroundColor = "#b59d04";
            choice_board[0].innerHTML = "Both of you selected " + choices[playerSelection].toUpperCase() + ".";
    }
    round++;
    document.getElementById("yours").innerHTML = "Your Score: " + yourscore;
    document.getElementById("computers").innerHTML = "Sheldons's Score: " + computerscore;
    document.getElementById("counter").innerHTML = "Round number: " + round;


    checkForWinner();
}
function checkForWinner() {
    if (yourscore < 5 && computerscore < 5)
        return;
    if (yourscore > computerscore) {
        choice_board[0].innerHTML = "The winner is YOU.<br/> Wanna play again ?";
        choice_board[0].style.backgroundColor = "#green";
    }
    else {
        choice_board[0].style.backgroundColor = "#red";
        choice_board[0].innerHTML = "The winner is Sheldon.<br/> Wanna play again ?";
    }
    var buttons = document.getElementsByClassName('buttons');
    if (buttons) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
    }
    var yes = document.createElement("button");
    yes.innerHTML = "Yes";
    yes.style.position = "relative";
    yes.style.top = "120px";
    yes.style.left = "35%";
    yes.style.padding = "12px 28px";
    yes.addEventListener("click", function () { location.reload(); });
    var no = document.createElement("button");
    no.innerHTML = "No";
    no.style.position = "relative";
    no.style.top = "120px";
    no.style.left = "50%";
    no.borderRadius = "20px;"
    no.style.padding = "12px 28px";
    no.addEventListener("click", function () {
        location.replace("https://www.youtube.com/watch?v=poH-tbpSzRE");
    });
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(yes)
    body.appendChild(no)
}
