# memory-game

This project is based on the famous "Simon" game. It has four coloured pads that flash in a randomly created sequence.

The game starts and flashes one coloured pad. The game player must then press that pad.

The game then adds an additional flash to the sequence and the game player must repeat the sequence.

If the game player repeats the sequence correctly, another flash is added to the sequence and the game
continues.

There are some game controls:

**Power** - this must be turned on to power up the game!

**Play** - the game starts when this is pressed

**Strict** - If turned on, the game is considerably harder! If the player gets the sequence _wrong_
the score is set to zero and and the user has to start from the begining of a new sequence. If it is not turned
on and the player gets the sequence wrong, the score remains the same and the same sequence is repeated
so the player can try again!

The game ends when the player successfully reproduces the complete sequence of flashes, currently
set to 20, or the player throws the game at the wall, turns the game off, smashes it with hammer etc!

# Current Status:

**Interface** Completed, but we forgot to include the **play** button and added one in a bit of a rush.
This needs to be redesigned a bit better! Work to-do!

font family needs to be defined!

Currently, the interface is responsive in size and is useable on small screens down to about 180px and
upwards. The maximum size of the interface is 500px and does not grow larger. However, your screen can
be as large as you like, we just thought that it wasn't comfortable to play using a mouse if any bigger.
If you want it for a huge screen with a huge interface, we can do this, just let us know and we'll make
for you.

Perhaps you want to release the game on a huge touch screen, this could be quite fun!

**JavaScript Functionality** code completed, we just need to do some refactoring to minimise the quantity of repeated code
