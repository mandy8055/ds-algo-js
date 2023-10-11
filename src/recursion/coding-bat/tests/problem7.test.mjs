import count7 from '../problem7.mjs';

describe('count7', () => {
  it('returns 0 when the input number is 0', () => {
    expect(count7(0)).toBe(0);
  });

  it('returns 0 when the input number contains no 7s', () => {
    expect(count7(123456)).toBe(0);
  });

  it('returns 1 when the input number contains one 7', () => {
    expect(count7(7)).toBe(1);
    expect(count7(17)).toBe(1);
    expect(count7(70)).toBe(1);
  });

  it('returns the correct count when the input number contains multiple 7s', () => {
    expect(count7(77)).toBe(2);
    expect(count7(777)).toBe(3);
    expect(count7(707)).toBe(2);
    expect(count7(1707)).toBe(2);
  });
});
