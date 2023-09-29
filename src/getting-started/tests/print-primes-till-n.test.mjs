import printPrimesTillN from '../print-primes-till-n.mjs';

describe('Eratosthenes Print Primes Till N', () => {
  test('should return an empty array for n=1', () => {
    expect(printPrimesTillN(1)).toEqual([]);
  });

  test('should return an array of prime numbers', () => {
    expect(printPrimesTillN(10)).toEqual([2, 3, 5, 7]);
    expect(printPrimesTillN(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(printPrimesTillN(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  test('should return an empty array for n < 1', () => {
    expect(printPrimesTillN(-1)).toEqual([]);
    expect(printPrimesTillN(0)).toEqual([]);
  });

  test('should handle large values of n', () => {
    expect(printPrimesTillN(100000)).toHaveLength(9592);
  });
});
