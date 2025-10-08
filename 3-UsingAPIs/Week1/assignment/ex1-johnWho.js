/*------------------------------------------------------------------------------
Full description at:
https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-1-john-who

Rewrite this function using Promise syntax:
- Return a new Promise from getAnonName.
- resolve with the full name.
- reject with: "You didn't pass in a first name!"
------------------------------------------------------------------------------*/

export const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
        return;
      }
      const fullName = `${firstName} Doe`;
      resolve(fullName);
    }, 1000);
  });
};

function main() {
  getAnonName('John')
    .then(console.log)                   
    .catch(err => console.error(err.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
