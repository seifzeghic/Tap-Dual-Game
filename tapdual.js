let playerOne = document.querySelector('.playerone');
let playerTwo = document.querySelector('.playertwo');
let endGame = document.querySelector('.gamemessage');
let restart = document.querySelector('.restart');
let theWinner = document.querySelector('.winner');
let redScore = document.querySelector('.redscore');
let blueScore = document.querySelector('.bluescore');
let gameOver = false;
let red = 1;
let blue = 1;

playerOne.addEventListener('touchstart', function (event) {
    event.preventDefault();
    if(!gameOver) {
        playerOne.style.height = `${(playerOne.clientHeight / playerOne.parentElement.clientHeight) * 100 + 1}%`;
        playerTwo.style.flex = `1`;
        playerOne.style.removeProperty('flex');
        if ((playerOne.clientHeight / playerOne.parentElement.clientHeight) * 100 + 1 === 101) {
            gameOver = true;
            theWinner.innerHTML = 'Red';
            redScore.innerHTML = red++;
            endGame.style.display = 'flex';
        }
    }
});

playerTwo.addEventListener('touchstart', function (event) {
    event.preventDefault();
    if(!gameOver) {
        playerTwo.style.height = `${(playerTwo.clientHeight / playerTwo.parentElement.clientHeight) * 100 + 1}%`;
        playerOne.style.flex = `1`;
        playerTwo.style.removeProperty('flex');
        if ((playerTwo.clientHeight / playerTwo.parentElement.clientHeight) * 100 + 1 === 101) {
            gameOver = true;
            theWinner.innerHTML = 'Blue';
            blueScore.innerHTML = blue++;
            endGame.style.display = 'flex'
        }
    }
});

restart.addEventListener('click', function () {
    gameOver = false;
    playerOne.style.height = '50%';
    playerTwo.style.height = '50%';
    playerOne.style.removeProperty('flex');
    playerTwo.style.removeProperty('flex');
    endGame.style.display = 'none'
})
