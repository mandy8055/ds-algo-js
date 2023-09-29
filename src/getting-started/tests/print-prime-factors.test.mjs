import printPrimeFactors from '../print-prime-factors.mjs';

describe('printPrimeFactors function', () => {
  it('should return an empty array if the input is less than 2', () => {
    expect(printPrimeFactors(1)).toEqual('no prime factors');
    expect(printPrimeFactors(0)).toEqual('no prime factors');
    expect(printPrimeFactors(-5)).toEqual('no prime factors');
  });

  it('should return an array of prime factors for a given number', () => {
    expect(printPrimeFactors(12)).toEqual('2 2 3');
    expect(printPrimeFactors(8)).toEqual('2 2 2');
    expect(printPrimeFactors(35)).toEqual('5 7');
    expect(printPrimeFactors(360)).toEqual('2 2 2 3 3 5');
    expect(printPrimeFactors(123456)).toEqual('2 2 2 2 2 2 3 643');
    expect(printPrimeFactors(999999)).toEqual('3 3 3 7 11 13 37');
  });

  it('should return an array with the number itself if it is prime', () => {
    expect(printPrimeFactors(7)).toEqual('1 7');
    expect(printPrimeFactors(23)).toEqual('1 23');
    expect(printPrimeFactors(7919)).toEqual('1 7919');
  });
});
