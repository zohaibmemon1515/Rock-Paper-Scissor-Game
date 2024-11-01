var userScore = 0;
var compScore = 0;
var Choices = document.querySelectorAll(".choice");
var msgPick = document.getElementById("msgPick");
var userScoreP = document.getElementById("userScore");
var compScoreP = document.getElementById("compScore");
var generateCompChoice = function () {
    var options = ["Rock", "Paper", "Scissor"];
    var randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
var drawGame = function () {
    // Reset scores
    compScore = 0;
    userScore = 0;
    if (userScoreP) {
        userScoreP.innerText = userScore.toString();
    }
    if (compScoreP) {
        compScoreP.innerText = compScore.toString();
    }
    if (msgPick) {
        msgPick.innerText = "Game was a draw! Play Again";
        msgPick.style.backgroundColor = "black";
        msgPick.style.color = "orange";
    }
};
var showWinner = function (userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        if (userScoreP) {
            userScoreP.innerText = userScore.toString();
        }
        if (msgPick) {
            msgPick.innerText = "You Win! ".concat(userChoice, " beats ").concat(compChoice);
            msgPick.style.backgroundColor = "green";
            msgPick.style.color = "white";
        }
    }
    else {
        compScore++;
        if (compScoreP) {
            compScoreP.innerText = compScore.toString();
        }
        if (msgPick) {
            msgPick.innerText = "You Lose! ".concat(compChoice, " beats ").concat(userChoice);
            msgPick.style.backgroundColor = "red";
            msgPick.style.color = "black";
        }
    }
};
var playGame = function (userChoice) {
    var compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        var userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice !== "Paper";
        }
        else if (userChoice === "Paper") {
            userWin = compChoice !== "Scissor";
        }
        else {
            userWin = compChoice !== "Rock";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
Choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        var userChoice = choice.getAttribute("id");
        if (userChoice) {
            playGame(userChoice);
        }
    });
});
