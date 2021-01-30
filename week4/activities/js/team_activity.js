const boardGame = document.querySelector('.boxes');
const resetBtn = document.getElementById('reset');

const playerOne = 'X';
const playerTwo = '0';
const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let player = playerOne;

function gameplay(enter) {
    console.log(enter.target);
    enter.target.innerHTML = player;
    if (player === playerOne) {
        player = playerTwo;
    } else {
        player = playerOne;
    }
    if (checkWin(currentClass)) {

    }
}

function reset() {
    for (let i = 0; i < boardGame.children.length; i++) {
        boardGame.children[i].innerText = '';
    }
}

boardGame.addEventListener('click', gameplay);
resetBtn.addEventListener('click', reset);


console.log(boardGame);