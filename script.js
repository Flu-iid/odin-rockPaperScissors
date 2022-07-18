const random = (n = 3) => Math.floor(Math.random() * n);

const gameMap = ["rock", "paper", "scissor", random()];

const rule = (player1, player2) => {
    //player1 view
    console.table([
        { player: gameMap[player1] },
        { computer: gameMap[player2] },
    ]);
    if (player1 == player2) {
        return 0;
    } else if (Math.abs(player1 - player2) == 2) {
        if (player1 == 0) {
            return 1;
        } else {
            return -1;
        }
    } else {
        if (player1 > player2) {
            return 1;
        } else {
            return -1;
        }
    }
};

const changeView = (id) => {
    const target = document.getElementById(id);
    if (getComputedStyle(target).display == "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
};

let setCount = 0;
const countInput = () => {
    setCount = parseInt(document.getElementById("setInput").value);
    console.log(`sets: ${setCount}`);
    changeView("start");
    changeView("game");
    changeView("result");
    document.getElementById("setNumber").textContent = setCount;
};

let playerScore = 0;
let computerScore = 0;

const playerClick = (n) => {
    let playerInput = parseInt(n);
    let computerInput = random();
    let set = rule(playerInput, computerInput);
    document.getElementById("player-show").textContent = (playerInput==3?"Guess What!":gameMap[playerInput])
    document.getElementById("computer-show").textContent = gameMap[computerInput]
    console.log(set);
    if (set > 0) {
        playerScore++;
    } else if (set < 0) {
        computerScore++;
    }
    console.log({ player: playerScore, computer: computerScore });
    let playerResult = playerScore;
    let computerResult = computerScore;
    document.getElementById("player-result").textContent = playerResult;
    document.getElementById("computer-result").textContent = computerResult;
    if (playerScore == setCount || computerScore == setCount) {
        changeView("game");
        playerScore > computerScore ? alert("You Won!") : alert("You lost :(");
    }
};
