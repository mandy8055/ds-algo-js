import lcm from '../lcm';

describe('LCM function', () => {
  it('should return the product of two numbers if they are co-prime', () => {
    expect(lcm(7, 11)).toEqual(77);
  });

  it('should return the larger number if it is a multiple of the smaller number', () => {
    expect(lcm(4, 12)).toEqual(12);
  });

  it('should return the LCM of two numbers that are prime', () => {
    expect(lcm(23, 29)).toEqual(667);
  });

  it('should return the same number if both numbers are the same', () => {
    expect(lcm(8, 8)).toEqual(8);
  });
});
