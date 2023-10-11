import count8 from '../problem8.mjs';

describe('count8', () => {
  it('returns 0 when the input number is 0', () => {
    expect(count8(0)).toBe(0);
  });

  it('returns 0 when the input number contains no 8s', () => {
    expect(count8(123456)).toBe(0);
  });

  it('returns 1 when the input number contains one 8', () => {
    expect(count8(8)).toBe(1);
    expect(count8(18)).toBe(1);
    expect(count8(80)).toBe(1);
  });

  it('returns the correct count when the input number contains multiple 8s', () => {
    expect(count8(88)).toBe(3); // 88 has two 8s, but one of them is part of 88, so it counts double
    expect(count8(888)).toBe(5); // similar logic as above
    expect(count8(808)).toBe(2);
    expect(count8(1808)).toBe(2);
  });

  it('returns the correct count when the input number contains multiple 88s', () => {
    expect(count8(8888)).toBe(7); // 8888 has four 8s, but two of them are part of 88, so they count double
    expect(count8(88188)).toBe(6); // similar logic as above
  });
});
