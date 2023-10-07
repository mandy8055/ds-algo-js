import nestParen from '../problem27.mjs';

describe('nestParen function', () => {
  it('returns true when the string is empty', () => {
    expect(nestParen('')).toBe(true);
  });

  it('returns true when the string has one pair of correctly nested parentheses', () => {
    expect(nestParen('()')).toBe(true);
  });

  it('returns false when the string has one pair of incorrectly nested parentheses', () => {
    expect(nestParen(')(')).toBe(false);
  });

  it('returns true when the string has multiple pairs of correctly nested parentheses', () => {
    expect(nestParen('(())')).toBe(true);
    expect(nestParen('((()))')).toBe(true);
  });

  it('returns false when the string has multiple pairs of incorrectly nested parentheses', () => {
    expect(nestParen('(()))')).toBe(false);
    expect(nestParen(')()(')).toBe(false);
  });
});
