const boardGame = document.querySelector('.boxes');
const resetBtn = document.getElementById('reset');

const playerOne = 'X';
const playerTwo = '0';

let player = playerOne;

function gameplay(enter) {
    console.log(enter.target);
    enter.target.innerHTML = player;
    if (player === playerOne) {
        player = playerTwo;
    } else {
        player = playerOne;
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