// ************ variables ************
let order = []; // flashing lights order
let playerOrder = []; // keep track of player order
let flash; // record number of flashes
let turn; // keep track of what turn we are on
let good; // track if player is doing well
let compTurn;
let intervalID;
let strict = false;
let noise = true;
let on = false;
let win;

// ************ play pad selectors ************
const topLeft = document.querySelector("#top-left");
const topRight = document.querySelector("#top-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomRight = document.querySelector("#bottom-right");
const padContainer = document.querySelector("#pad-container");

// ************ control button selectors ************
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#powerBtn");
const startButton = document.querySelector("#playBtn");

// ************ display selector ************
const turnCounter = document.querySelector("#score");

// ************ event listeners ************
strictButton.addEventListener("change", (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

onButton.addEventListener("click", (event) => {
  if (onButton.checked === true) {
    on = true;
    turnCounter.innerHTML = "--";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor(); // turn the lights off!
    clearInterval(intervalID);
  }
});

startButton.addEventListener("click", (event) => {
  if (on || win) {
    play();
  }
});
// event listener added to parent pad wrapper
padContainer.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (on) {
    // do something if the element has a dataset attr
    if (id) {
      let pad = parseInt(id, 10);
      console.log(pad);
      playerOrder.push(pad);
      check();
      if (pad == 1) one();
      if (pad == 2) two();
      if (pad == 3) three();
      if (pad == 4) four();
      if (!win) {
        console.log("No win! :P");
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  }
});

// *********** functions *********** \\
function play() {
  resetDefaults();
  for (let i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  //console.log("order", order.length);
  compTurn = true;
  intervalID = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false; // set so buttons can't be clicked

  if (flash == turn) {
    clearInterval(intervalID);
    compTurn = false;
    clearColor();
    on = true;
  }
  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft.style.backgroundColor = "lightgreen";
}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = "tomato";
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = "yellow";
}

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = "lightskyblue";
}

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == order.length && good) winGame();

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalID = setInterval(gameTurn, 800);
      }
    }, 800);
    noise = false;
  }
  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalID = setInterval(gameTurn, 800);
  }
}

// these were reset in the play function originally
// but we'll probably use them again! :P
function resetDefaults() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalID = 0;
  turn = 1;
  turnCounter.innerHTML = "1";
  good = true;
}

function clearColor() {
  topLeft.style.backgroundColor = "darkgreen";
  topRight.style.backgroundColor = "darkred";
  bottomLeft.style.backgroundColor = "goldenrod";
  bottomRight.style.backgroundColor = "darkblue";
}

function flashColor() {
  topLeft.style.backgroundColor = "lightgreen";
  topRight.style.backgroundColor = "tomato";
  bottomLeft.style.backgroundColor = "yellow";
  bottomRight.style.backgroundColor = "lightblue";
}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}
