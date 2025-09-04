export const compliments = [
  "great",
  "awesome",
  "fantastic",
  "brilliant",
  "wonderful",
  "amazing",
  "incredible",
  "outstanding",
  "marvelous",
  "exceptional"
];

export function giveCompliment(name) {
  const i = Math.floor(Math.random() * compliments.length);
  return `You are ${compliments[i]}, ${name}!`;
}

function main() {
  const myName = "HackYourFuture";
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = "Amsterdam";
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== "test") {
  main();
}
1. Complete the function named `giveCompliment`as follows:

   export function giveCompliment(name) {
  const compliments = [
    "great",
    "awesome",
    "fantastic",
    "brilliant",
    "wonderful",
    "amazing",
    "incredible",
    "outstanding",
    "marvelous",
    "exceptional"
  ];
  const i = Math.floor(Math.random() * compliments.length);
  return `You are ${compliments[i]}, ${name}!`;
}

function main() {
  const myName = "HackYourFuture";
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = "Amsterdam";
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== "test") {
  main();
}

