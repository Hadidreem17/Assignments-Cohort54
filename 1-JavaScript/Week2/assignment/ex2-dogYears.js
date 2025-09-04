export function calculateDogAge(humanYears) {
  return humanYears * 7;
}

function main() {
  const myAge = 25;
  console.log(
    `If you are ${myAge} years old, that's ${calculateDogAge(myAge)} in dog years!`
  );

  const yourAge = 40;
  console.log(
    `If you are ${yourAge} years old, that's ${calculateDogAge(yourAge)} in dog years!`
  );
}

if (process.env.NODE_ENV !== "test") {
  main();
}

