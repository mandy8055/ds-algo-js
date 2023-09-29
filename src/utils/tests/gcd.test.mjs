import gcd from '../gcd';

describe('GCD function', () => {
  it('should return 1 if one of the numbers is 1', () => {
    expect(gcd(1, 5)).toEqual(1);
  });

  it('should return the GCD of two numbers that have a common factor', () => {
    expect(gcd(12, 18)).toEqual(6);
  });

  it('should return the GCD of two numbers that are prime', () => {
    expect(gcd(23, 29)).toEqual(1);
  });

  it('should return the GCD of two numbers that are the same', () => {
    expect(gcd(8, 8)).toEqual(8);
  });

  it('should return the GCD of two numbers that have a common factor', () => {
    expect(gcd(123456, 654321)).toEqual(3);
  });
});
