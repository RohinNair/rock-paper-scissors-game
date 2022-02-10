'use strict';

// Selecting elements

// Sides of player bg
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Current score display of player
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// What they rolled now
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnPlay = document.querySelector('.btn--play');

// Player Scores

let player1score = 0;
let player2score = 0;

document.querySelector('.over').classList.add('hidden');

// Functions

// Rock Paper Scissors function

btnPlay.addEventListener('click', function () {
  // Generate Rock Paper Scissors for both players

  // Number between 1 to 2 will be generated and stored for each player
  let player1 = Math.trunc(Math.random() * 3);

  let player2 = Math.trunc(Math.random() * 3);

  // 0 - Rock

  // 1 - Paper

  // 2 - Scissors

  if (player1 === 0) {
    current0El.textContent = 'Rock';
  } else if (player1 === 1) {
    current0El.textContent = 'Paper';
  } else if (player1 === 2) {
    current0El.textContent = 'Scissors';
  }

  if (player2 === 0) {
    current1El.textContent = 'Rock';
  } else if (player2 === 1) {
    current1El.textContent = 'Paper';
  } else if (player2 === 2) {
    current1El.textContent = 'Scissors';
  }

  // Determine Winner
  // Rules

  // P1 0 && P2 0 - Draw
  // P1 0 && P2 1 - P2 wins
  // P1 0 && P2 2 - P1 wins

  // P1 1 && P2 0 - P1 wins
  // P1 1 && P2 1 - Draw
  // P1 1 && P2 2 - P2 wins

  // P1 2 && P2 0 - P2 wins
  // P1 2 && P2 1 - P1 wins
  // P1 2 && P2 2 - Draw

  // If P1 rolls Rock
  if (player1score < 3 || player2score < 3) {
    if (player1 === 0 && player2 === 1) {
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('.player--0').classList.remove('player--winner');
      player2score++;
    } else if (player1 === 0 && player2 === 2) {
      document.querySelector('.player--0').classList.add('player--winner');
      document.querySelector('.player--1').classList.remove('player--winner');
      player1score++;
    }
    // If P1 rolls Paper
    else if (player1 === 1 && player2 === 0) {
      document.querySelector('.player--0').classList.add('player--winner');
      document.querySelector('.player--1').classList.remove('player--winner');
      player1score++;
    } else if (player1 === 1 && player2 === 2) {
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('.player--0').classList.remove('player--winner');
      player2score++;
    }
    // If P1 rolls Scissors
    else if (player1 === 2 && player2 === 0) {
      document.querySelector('.player--1').classList.add('player--winner');
      document.querySelector('.player--0').classList.remove('player--winner');
      player2score++;
    } else if (player1 === 2 && player2 === 1) {
      document.querySelector('.player--0').classList.add('player--winner');
      document.querySelector('.player--1').classList.remove('player--winner');
      player1score++;
    }
    // If both players roll the same thing (draw)
    else if (player1 === player2) {
      document.querySelector('.player--0').classList.remove('player--winner');
      document.querySelector('.player--1').classList.remove('player--winner');
    }

    // Award point to winner

    score0El.textContent = player1score;
    score1El.textContent = player2score;
  }

  // If Player 1 gets 3 points first
  if (player1score === 3) {
    // Highlight Player 1 and darken Player 2
    document.querySelector('.player--1').classList.add('player--loser');
    document.querySelector('.player--0').classList.add('player--winner');
    // Remove Play button
    btnPlay.classList.add('hidden');
    // Show Game Over Sign Declaring the Winner
    document.querySelector('.over').classList.remove('hidden');
    document.querySelector('.over').src = 'game-over-1.png';
  }
  // If Player 2 gets 3 points first
  else if (player2score === 3) {
    // Highlight Player 2 and darken Player 1
    document.querySelector('.player--0').classList.add('player--loser');
    document.querySelector('.player--1').classList.add('player--winner');
    // Remove Play button
    btnPlay.classList.add('hidden');
    // Show Game Over Sign Declaring the Winner
    document.querySelector('.over').classList.remove('hidden');
    document.querySelector('.over').src = 'game-over-2.png';
  }
});

btnNew.addEventListener('click', function () {
  // Reloads the entire page, resetting everything
  location.reload();
});
