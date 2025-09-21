
function selectRandomly(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  return `You will be a ${selectRandomly(jobTitles)} in ${selectRandomly(
    locations
  )}, married to ${selectRandomly(partnerNames)} with ${selectRandomly(
    numKids
  )} kids.`;
}

function main() {
  const numKids = [0, 1, 2, 3, 4];
  const partnerNames = ["Alex", "Sam", "Taylor", "Jordan", "Casey"];
  const locations = ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Eindhoven"];
  const jobTitles = ["developer", "designer", "teacher", "engineer", "chef"];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}






