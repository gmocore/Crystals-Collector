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
let points = 0;
let win = false;
let lose = false;

// generate random number 1 - 10
function randomValueGenerator(){
    gemValue = Math.ceil(Math.random() * 10)
    // console.log(gemValue)
}

function redGemValueGenerator() {
    randomValueGenerator()
    redGemValue = gemValue;
    console.log(`Red gem value = `,redGemValue)
}

function greenGemValueGenerator() {
    randomValueGenerator()
    greenGemValue = gemValue;
    console.log(`Green gem value = `,greenGemValue)
}

function blueGemValueGenerator() {
    randomValueGenerator()
    blueGemValue = gemValue;
    console.log(`blue gem value = `,blueGemValue)
}

function purpleGemValueGenerator() {
    randomValueGenerator()
    purpleGemValue = gemValue;
    console.log(`purple gem value = `,purpleGemValue)
}

function gemValueAssignment() {
    redGemValueGenerator()
    greenGemValueGenerator()
    blueGemValueGenerator()
    purpleGemValueGenerator()
}

function getRandomInt(min, max) {
    pointTarget = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(pointTarget)
    $('#target-points').text(pointTarget)
  }

  getRandomInt(19, 120)

  gemValueAssignment()

  function checkScore() {
      if (points === pointTarget) {
          wins++
          $('.win-loss-text').text("You Win!")
          $('#win-count').text(wins)
          win = true
          newgame()
      }
       if(points > pointTarget) {
          losses++
          $('.win-loss-text').text("You Lose!")
          $('#loss-count').text(losses)
          lose = true
          newgame()
      } 
  }

  function newgame() {
      win = false
      lose = false
      points = 0
      gemValueAssignment()
  }

  $('#red-gem').click(function(){
      console.log('clicked')
      points += redGemValue
      $('#score-count').text(points)
      checkScore()
  })

  $('#green-gem').click(function(){
      console.log('clicked')
      points += greenGemValue
      $('#score-count').text(points)
      checkScore()

  })

  $('#blue-gem').click(function(){
      console.log('clicked')
      points += blueGemValue
      $('#score-count').text(points)
      checkScore()

  })

  $('#purple-gem').click(function(){
      console.log('clicked')
      points += purpleGemValue
      $('#score-count').text(points)
      checkScore()

  })


