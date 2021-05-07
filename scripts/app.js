// ================= variables =================
let gameSeq = []; // hold the sequence of flashing lights in an array
let playerSeq = []; // keep track of player order: Game / Player
let numFlash; // keep track of number of flashes
let turn; // keep track of the turn we are on (score number)
let ok; // track if player is doing well
let gTurn; // computer's turn true / flase
let intervalID; // ID for setInterval
let strict; // strict mode enabled true / false
let sound; // sound true / false
let power; // power on? true / false
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
console.log(score);
