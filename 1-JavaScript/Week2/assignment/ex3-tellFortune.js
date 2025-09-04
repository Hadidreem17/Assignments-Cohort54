export function tellFortune() {
  const numKids = [0, 1, 2, 3, 4];
  const partnerNames = ["Alex", "Sam", "Taylor", "Jordan", "Casey"];
  const locations = ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Eindhoven"];
  const jobs = ["developer", "designer", "teacher", "engineer", "chef"];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return `You will be a ${pick(jobs)} in ${pick(locations)}, and married to ${pick(partnerNames)} with ${pick(numKids)} kids.`;
}

function main() {
  console.log(tellFortune());
  console.log(tellFortune());
  console.log(tellFortune());
}

if (process.env.NODE_ENV !== "test") {
  main();
}


