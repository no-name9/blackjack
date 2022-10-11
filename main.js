let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let inGame = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let message = ""
let player = {
  name: "nemo",
  chips: 0
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": ¥" + player.chips


function getRandomCard() {
  let x = Math.floor(Math.random() * 13) + 1
  if (x === 1) {
    return 11
  } else if (x > 10) {
    return 10
  } else {
    return x
  }
}


function startGame() {
  if (isAlive === true && inGame === false) {
    inGame = true
    startEl.textContent = "STOP"
    let initCard = getRandomCard()
    cards.push(initCard)
    initCard = getRandomCard()
    cards.push(initCard)
    sum = cards[0] + cards[1]
    renderGame()
  }

  else if (isAlive === false) {
    cards = []
    sum = 0
    isAlive = true
    inGame = false
    startGame()
  }

  else if (isAlive === true && inGame === true) {
    messageEl.textContent = "Your score is " + sum + "!"
    startEl.textContent = "NEW GAME"
    inGame = false
    isAlive = true
    cards = []
    sum = 0
  }
}


function newCard() {
  if (isAlive === true && hasBlackJack === false && inGame === true) {
    messageEl.textContent = "Drawing a new card form the deck!"
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    erase()
  }
}


function renderGame() {
  cardsEl.textContent = "Cards: "
  sumEl.textContent = "Sum: " + sum
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    hasBlackJack = false
  }
  else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    isAlive = false
    hasBlackJack = true
  }
  else {
    message = "You're out of the game! 😭"
    hasBlackJack = false
    isAlive = false
  }
  messageEl.textContent = message
}

let startEl = document.querySelector("#start-el")

function erase() {
  if (isAlive === false) {
    startEl.textContent = "NEW GAME"
    message = "Game Over"
    renderGame()
  }
}






