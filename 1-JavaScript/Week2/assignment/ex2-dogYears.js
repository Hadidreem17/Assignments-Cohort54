export function calculateDogAge(humanYears) {
  const dogYears = humanYears * 7;
  return `If you are ${humanYears} years old, that's ${dogYears} in dog years!`;
}

function main() {
  console.log(calculateDogAge(25));
  console.log(calculateDogAge(40));
}

if (process.env.NODE_ENV !== "test") {
  main();
}

