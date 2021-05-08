// ================= variables =================
let gameSeq = []; // hold the sequence of flashing lights in an array
let playerSeq = []; // keep track of player order: Game / Player
let numFlash; // keep track of number of flashes
let turn = 0; // keep track of the turn we are on (score number)
let ok; // track if player is doing well
let compTurn; // computer's turn true / false
let intervalID; // ID for setInterval
let strict = false; // strict mode enabled true / false
let sound = true; // sound true / false
let power = false; // power on? true / false
let playing = false;
let win; // did the player reproduce the complete sequence true / false

// ************ control button selectors ************
const powerBtn = document.getElementById("powerBtn");
const playBtn = document.getElementById("playBtn");
const strictBtn = document.getElementById("strict");
// ************ play pad selectors ************
const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");
// ************ display selector ************
const score = document.getElementById("score");

// ************ event listeners ************
powerBtn.addEventListener("click", (event) => {
  if (powerBtn.checked) {
    power = true;
    score.innerText = "0";
  } else {
    power = false;
    score.innerText = "";
  }
});
strictBtn.addEventListener("change", (event) => {
  if (strictBtn.checked) {
    strict = true;
  } else {
    strict = false;
  }
});

playBtn.addEventListener("change", (event) => {
  if (playBtn.checked) {
    playing = true;
    if (power || win) {
      play();
    }
  } else {
    playing = false;
    resetDefaults();
    powerBtn.checked = false;
    console.log("Stopped! Defaults reset");
  }
});
// These are the event listeners for the pads
// try re-writing using event bubbling to listen
// to the 'pads' section wrapping the pads
topLeft.addEventListener("click", (event) => {
  console.log("power", power, "playing", playing);
  if (power && playing) {
    playerSeq.push(1);
    console.log(playerSeq);
    check();
    one();
    if (!win) {
      console.log("No Win :(");
      setTimeout(() => {
        clearColour();
      }, 250);
    }
    console.log(playerSeq);
  } else if (power && !playing) {
    console.log("stopped. play button not active");
  }
});
topRight.addEventListener("click", (event) => {
  console.log("power", power, "playing", playing);
  if (power && playing) {
    playerSeq.push(2);
    console.log(playerSeq);
    check();
    one();
    if (!win) {
      console.log("No Win :(");
      setTimeout(() => {
        clearColour();
      }, 250);
    }
    console.log(playerSeq);
  } else if (power && !playing) {
    console.log("stopped. play button not active");
  }
});
bottomLeft.addEventListener("click", (event) => {
  console.log("power", power, "playing", playing);
  if (power && playing) {
    playerSeq.push(3);
    console.log(playerSeq);
    check();
    one();
    if (!win) {
      console.log("No Win :(");
      setTimeout(() => {
        clearColour();
      }, 250);
    }
    console.log(playerSeq);
  } else if (power && !playing) {
    console.log("stopped. play button not active");
  }
});
bottomRight.addEventListener("click", (event) => {
  console.log("power", power, "playing", playing);
  if (power && playing) {
    playerSeq.push(4);
    console.log(playerSeq);
    check();
    one();
    if (!win) {
      console.log("No Win :(");
      setTimeout(() => {
        clearColour();
      }, 250);
    }
    console.log(playerSeq);
  } else if (power && !playing) {
    alert("You needs to press the play button before you can start");
    console.log("stopped. play button not active");
  }
});

// *********** functions *********** \\
function play() {
  console.log("playing");
  resetDefaults();
  for (let i = 0; i < 20; i++) {
    gameSeq.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
  intervalID = setInterval(gameTurn, 800);
}
function gameTurn() {
  power = false;

  if (numFlash == turn) {
    clearInterval(intervalID);
    compTurn = false;
    clearColour();
    power = true;
  }
  if (compTurn) {
    clearColour();
    setTimeout(() => {
      if (gameSeq[numFlash] == 1) one();
      if (gameSeq[numFlash] == 2) two();
      if (gameSeq[numFlash] == 3) three();
      if (gameSeq[numFlash] == 4) four();
      numFlash++;
    }, 200);
  }
}
function check() {}
function clearColour() {}
function resetDefaults() {
  win = false;
  gameSeq = [];
  playerSeq = [];
  numFlash = 0;
  intervalID = 0;
  turn = 0;
  score.innerText = "0";
  ok = true;
}
