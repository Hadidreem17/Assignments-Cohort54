const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(item) {
  if (item !== undefined) {
    shoppingCart.push(item);
    if (shoppingCart.length > 3) {
      shoppingCart.shift();
    }
  }
  return `You bought ${shoppingCart.join(', ')}!`;
}

// ===== manual tests (restore) =====
function test1() {
  console.log('Test 1: add `chocolate` to the cart');
  const expected = 'You bought bananas, milk, chocolate!';
  const actual = addToShoppingCart('chocolate');
  console.assert(actual === expected);
}

function test2() {
  console.log('Test 2: add `waffles` (keep last 3 items)');
  const expected = 'You bought milk, chocolate, waffles!';
  const actual = addToShoppingCart('waffles');
  console.assert(actual === expected);
}

function test3() {
  console.log('Test 3: add `tea` (bananas removed)');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  console.assert(actual === expected);
}

function test4() {
  console.log('Test 4: add nothing (cart unchanged)');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart();
  console.assert(actual === expected);
}

function test5() {
  console.log('Test 5: `tea` should be added and `milk` removed');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

test();