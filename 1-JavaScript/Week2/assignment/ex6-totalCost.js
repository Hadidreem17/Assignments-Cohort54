/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  pizza: 4.5,
  soda: 1.25,
  cake: 6.0,
};

export function calculateTotalPrice(cart) {
  let total = 0;
  for (const key in cart) {
    total += cart[key];
  }
  return `Total: €${total}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log("\nTest 1: calculateTotalPrice should take one parameter");
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log("\nTest 2: return correct output when passed cartForParty");
  const expected = "Total: €14.49";
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
}

if (process.env.NODE_ENV !== "test") {
  test();
}
