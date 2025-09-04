/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-4-shopping-at-the-supermarket

Let's do some grocery shopping! We're going to get some things to cook dinner
with. However, you like to spend money and always buy too many things. So when 
you have more than 3 items in your shopping cart the first item gets taken out.

const shoppingCart = ["bananas", "milk"];

export function addToShoppingCart(item) {
  if (item !== undefined) {
    shoppingCart.push(item);
    if (shoppingCart.length > 3) {
      shoppingCart.shift();
    }
  }
  return `You bought ${shoppingCart.join(", ")}!`;
}

function main() {
  console.log(addToShoppingCart());
  console.log(addToShoppingCart("chocolate"));
  console.log(addToShoppingCart("waffles"));
  console.log(addToShoppingCart("tea"));
}

if (process.env.NODE_ENV !== "test") {
  main();
}
