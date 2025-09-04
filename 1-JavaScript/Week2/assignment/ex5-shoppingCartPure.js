/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-5-improved-shopping-at-the-supermarket

In the current exercise we will rewrite the `addToShoppingCart` function to make 
it pure. Do the following:

1. export function addToShoppingCart(cart, item) {
  const newCart = [...cart, item];
  if (newCart.length > 3) {
    return newCart.slice(newCart.length - 3);
  }
  return newCart;
}

function main() {
  const initialCart = ["bananas", "milk"];
  console.log(addToShoppingCart(initialCart, "chocolate"));
  console.log(addToShoppingCart(initialCart, "waffles"));
}

if (process.env.NODE_ENV !== "test") {
  main();
}
