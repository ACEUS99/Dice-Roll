let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const resetBtn = document.getElementById("resetBtn")
const rollBtn = document.getElementById("rollBtn")

rollBtn.addEventListener("click", function(){
    const randomNMumber = Math.floor(Math.random() * 6) + 1
    if(player1Turn) {
       
        player1Score += randomNMumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNMumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2's Turn"
    } else {
        player2Score += randomNMumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNMumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1's Turn"
    }

    if (player1Score >= 20){
        message.textContent = "Player 1 has won!"
        winner()

    }else if (player2Score >= 20){
        message.textContent = "player 2 has won!"
        winner()
    }

    player1Turn = !player1Turn
})

function winner(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


resetBtn.addEventListener("click", function(){
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = " - "
    player2Dice.textContent = " - "
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player1Turn = true
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
})