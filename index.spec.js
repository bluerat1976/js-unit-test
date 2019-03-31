const sum = require('./index');

describe('sum',() => {

  test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(5);
  });

  test('adds 4 + 5 to equal 7', () => {
    expect(sum(4, 5)).toBe(7);
  });  

})



