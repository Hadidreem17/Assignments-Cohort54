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
  const myName = "Rim";
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = "Hadid";
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== "test") {
  main();
}