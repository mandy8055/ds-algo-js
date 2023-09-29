import printFibonacciTillN from '../print-fibo-till-n.mjs';

describe('fibonacci sequence', () => {
  it('should return an empty array for n = 0', () => {
    expect(printFibonacciTillN(0)).toEqual([]);
  });

  it('should return [0] for n = 1', () => {
    expect(printFibonacciTillN(1)).toEqual([0]);
  });

  it('should return [0, 1] for n = 2', () => {
    expect(printFibonacciTillN(2)).toEqual([0, 1]);
  });

  it('should return [0, 1, 1] for n = 3', () => {
    expect(printFibonacciTillN(3)).toEqual([0, 1, 1]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] for n = 10', () => {
    expect(printFibonacciTillN(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('should return proper array for n = 40', () => {
    expect(printFibonacciTillN(40)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465,
      14930352, 24157817, 39088169, 63245986,
    ]);
  });
});
