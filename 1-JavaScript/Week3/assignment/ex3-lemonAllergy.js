const sanitizeFruitBasket = require('./ex3-lemonAllergy');

describe('js-wk3-ex3-lemonAllergy', () => {
  const fruitBasket = ['apple', 'banana', 'lemon', 'pear'];
  const originalFruitBasketContents = [...fruitBasket];

  test('sanitizeFruitBasket should take two parameters', () => {
    expect(sanitizeFruitBasket.length === 2).toBe(true);
  });

  test('sanitizeFruitBasket should not modify the original fruitBasket array', () => {
    sanitizeFruitBasket(fruitBasket, 'lemon');
    const sameContent =
      fruitBasket.length === originalFruitBasketContents.length &&
      fruitBasket.every((x, i) => x === originalFruitBasketContents[i]);
    expect(sameContent).toBe(true);
  });

  test('sanitizeFruitBasket should return a new array that does not include the unwanted "lemon"', () => {
    const result = sanitizeFruitBasket(fruitBasket, 'lemon');
    const hasNoLemon = !result
      .map(x => String(x).toLowerCase().trim())
      .includes('lemon');
    expect(hasNoLemon).toBe(true);
  });
});









  
