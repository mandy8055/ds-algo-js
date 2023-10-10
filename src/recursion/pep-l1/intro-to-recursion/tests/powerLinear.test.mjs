import powerLinear from '../powerLinear.mjs';

describe('powerLinear', () => {
  it('returns 1 when n is 0', () => {
    expect(powerLinear(5, 0)).toBe(1);
  });

  it('returns x when n is 1', () => {
    expect(powerLinear(5, 1)).toBe(5);
  });

  it('returns x^2 when n is 2', () => {
    expect(powerLinear(5, 2)).toBe(25);
  });

  it('returns x^n when n is greater than 2', () => {
    expect(powerLinear(2, 3)).toBe(8);
    expect(powerLinear(3, 3)).toBe(27);
  });

  it('returns 1 when x is 0 and n is 0', () => {
    expect(powerLinear(0, 0)).toBe(1);
  });

  it('returns 0 when x is 0 and n is greater than 0', () => {
    expect(powerLinear(0, 5)).toBe(0);
  });
});
