// create 4 gems
    // randomly generate value for each gem from 1-10
    // this changes each game

// generate random point target between 19-120

// create variables for wins, losses, points, DOM display

// score starts at 0, clicking gem, adds random value to score
    // if score === target, wins++
    // if score > target losses++
        // win or loss triggers new game

//newGame()
    // score resets to 0
    // gems have new random value assigned
    // new target value created and displayed on page

let wins = 0;
let losses = 0;
let score = 0;
let pointTarget;
let redGemValue;
let greenGemValue;
let blueGemValue;
let purpleGemValue;
let gemValue
let win = false;
let lose = false;

// generate random number 1 - 10
function randomValueGenerator(){
    gemValue = Math.ceil(Math.random() * 10)
    console.log(gemValue)
}

randomValueGenerator()

