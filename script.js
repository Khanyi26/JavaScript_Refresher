const gameBoard = document.getElementById('game-board');
const letters = 'AABBCCDDEEFFGGHH'.split('');
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Shuffle letters
letters.sort(() => 0.5 - Math.random());

//Create Cards
letters.forEach(letter => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class = "front">${letter}</div>
        <div class = "back">?</div>
    `;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if(!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('.front').textContent === secondCard.querySelector('.front').textContent;
    isMatch ? disableCards() : unflipCards();   
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();    
}

function resetBoard() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);   
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];    
}