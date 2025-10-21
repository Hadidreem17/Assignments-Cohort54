/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-5-throw-dice-sequentially

In the previous exercise we used `Promise.all()` to throw five dice in one go.
In the current exercise we will be throwing five dice one at a time, waiting 
for a die to settle before throwing the next one. Of course, we still consider 
a die rolling off the table to be a showstopper.

To throw the dice sequentially we will be using a _promise chain_. Your job is 
to expand the given promise chain to include five dice.
------------------------------------------------------------------------------*/

import { rollDie } from '../../helpers/pokerDiceRoller.js';

export function rollDice() {
  const results = [];

  return rollDie(1)
    .then((value) => {
      results.push(value);
      return rollDie(2);
    })
    .then((value) => {
      results.push(value);
      return rollDie(3);
    })
    .then((value) => {
      results.push(value);
      return rollDie(4);
    })
    .then((value) => {
      results.push(value);
      return rollDie(5);
    })
    .then((value) => {
      results.push(value);
      return results;
    });
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
In this exercise, we use a Promise **chain** instead of `Promise.all()`.
Each `.then()` waits for the previous die to finish rolling before starting the next one.
This ensures the dice are rolled sequentially, not in parallel.
If any die rejects (for example, it falls off the table),
the chain stops immediately and the final Promise rejects with that error.
*/
