function doubleEvenNumbers(numbers) {
  // TODO rewrite the function body using `map` and `filter`.
  return numbers.filter(n => n % 2 === 0).map(n => n * 2);
}
module.exports = doubleEvenNumbers;
// ! Unit test (using Jest)
describe('js-wk3-ex1-doubleEvenNumbers', () => {
  test('doubleEvenNumbers should take the even numbers and double them', () => {
    const actual = doubleEvenNumbers([1, 2, 3, 4]);
    const expected = [4, 8];
    expect(actual).toEqual(expected);
  });
});
