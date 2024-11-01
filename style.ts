let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".choice"); 
const msgPick = document.getElementById("msgPick");

const userScoreP = document.getElementById("userScore");
const compScoreP = document.getElementById("compScore");

const generateCompChoice = (): string => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = (): void => {
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

const showWinner = (userWin: boolean, userChoice: string, compChoice: string): void => {
    if (userWin) {
        userScore++;
        if (userScoreP) {
            userScoreP.innerText = userScore.toString();
        }
        if (msgPick) {
            msgPick.innerText = `You Win! ${userChoice} beats ${compChoice}`;
            msgPick.style.backgroundColor = "green";
            msgPick.style.color = "white";
        }
    } else {
        compScore++;
        if (compScoreP) {
            compScoreP.innerText = compScore.toString();
        }
        if (msgPick) {
            msgPick.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
            msgPick.style.backgroundColor = "red";
            msgPick.style.color = "black";
        }
    }
};

const playGame = (userChoice: string): void => {
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        drawGame();
        
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice !== "Paper";
        } else if (userChoice === "Paper") {
            userWin = compChoice !== "Scissor";
        } else {
            userWin = compChoice !== "Rock";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        if (userChoice) {
            playGame(userChoice);
        }
    });
});
