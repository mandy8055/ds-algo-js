import bunnyEars from '../problem2.mjs';

describe('bunnyEars', () => {
  it('returns 0 when input is 0', () => {
    expect(bunnyEars(0)).toBe(0);
  });

  it('returns 2 when input is 1', () => {
    expect(bunnyEars(1)).toBe(2);
  });

  it('returns 4 when input is 2', () => {
    expect(bunnyEars(2)).toBe(4);
  });

  it('throws error when input is negative', () => {
    expect(() => bunnyEars(-1)).toThrow('invalid input');
  });

  it('returns correct value for larger input', () => {
    expect(bunnyEars(10)).toBe(20);
  });
});
