import bunnyEars2 from '../problem4.mjs';

describe('bunnyEars2', () => {
  it('returns 0 when input is 0', () => {
    expect(bunnyEars2(0)).toBe(0);
  });

  it('throws error when input is negative', () => {
    expect(() => bunnyEars2(-1)).toThrow('Invalid input');
  });

  it('returns correct value for odd number of bunnies', () => {
    expect(bunnyEars2(3)).toBe(7);
  });

  it('returns correct value for even number of bunnies', () => {
    expect(bunnyEars2(4)).toBe(10);
  });
});
