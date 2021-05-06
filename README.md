# memory-game

This project is based on the famous "Simon" game. It has four coloured pads that flash in a randomly created sequence.

The game starts and flashes one coloured pad. The game player must then press that pad.

The game then adds an additional flash to the sequence and the game player must repeat the sequence.

If the game player repeats the sequence correctly, another flash is added to the sequence and the game
continues.

There are some game controls:

__Power__ - this must be turned on to power up the game!

__Play__ - the game starts when this is pressed

__Strict__ - If turned on, the game is considerably harder! If the player gets the sequence _wrong_
the score is set to zero and and the user has to start from the begining again. If it is not turned
on and the player gets the sequence wrong, the score remains the same and the sequence is repeated
and the player can try again!

The game ends when the player successfully reproduces the complete sequence of flashes, currently
set to 20, or the player throws the game at the wall, turns the game off, smashes it with hammer etc!
