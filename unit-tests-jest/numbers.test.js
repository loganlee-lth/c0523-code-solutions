import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const result1 = evenNumbers([1, 4, 5, 10, 0]);
    expect(result1).toEqual([4, 10, 0]);
    const result2 = evenNumbers([]);
    expect(result2).toEqual([]);
    const result3 = evenNumbers([-5, -4, -3, -2, -1, 0]);
    expect(result3).toEqual([-4, -2, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const result1 = toDollars(12);
    expect(result1).toEqual('$12.00');
    const result2 = toDollars(0);
    expect(result2).toEqual('$0.00');
    const result3 = toDollars(-20.882);
    expect(result3).toEqual('-$20.88');
  });
});

describe('divideBy', () => {
  it(`returns a new array of numbers where every entry has been divided by the given divisor`, () => {
    const arr1 = [-3, -2, -1, 1, 2, 3];
    const result1 = divideBy(arr1, 2);
    expect(result1).toEqual([-1.5, -1, -0.5, 0.5, 1, 1.5]);
    const arr2 = [];
    const result2 = divideBy(arr2, 5);
    expect(result2).toEqual([]);
    const arr3 = [0];
    const result3 = divideBy(arr3, 5);
    expect(result3).toEqual([0]);
  });
});

describe('multiplyBy', () => {
  it(`modifies an object by multiplying the value of each key, but only if that value is a number`, () => {
    const obj1 = {
      Learning: 1,
      4: 'Fuze',
      Project: true,
      Idea: 4,
      Think: [],
      React: {},
    };
    const result1 = multiplyBy(obj1, 4);
    expect(result1).toEqual({
      Learning: 4,
      4: 'Fuze',
      Project: true,
      Idea: 16,
      Think: [],
      React: {},
    });
    expect(result1).toEqual(obj1);
    const obj2 = {};
    const result2 = multiplyBy(obj2, 5);
    expect(result2).toEqual({});
    expect(result2).toEqual(obj2);
  });
});
