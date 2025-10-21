/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game
------------------------------------------------------------------------------*/

import { rollDie } from '../../helpers/pokerDiceRoller.js';
export function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const dicePromises = dice.map((die) => rollDie(die));
  return Promise.all(dicePromises);
}
function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}
// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

/*
Explanation:
`Promise.all()` runs all five dice rolls at the same time.
It returns a single Promise that resolves when all the dice finish rolling
and provides an array with all their results.
If any one die rejects (for example, rolls off the table), 
the entire `Promise.all()` rejects immediately with that error.
*/
