import strCount from '../problem28.mjs';

describe('strCount function', () => {
  it('returns 0 when the main string is empty', () => {
    expect(strCount('', 'abc')).toBe(0);
  });

  it('returns 0 when the substring is longer than the main string', () => {
    expect(strCount('abc', 'abcd')).toBe(0);
  });

  it('returns 0 when the main string does not contain the substring', () => {
    expect(strCount('abc', 'def')).toBe(0);
  });

  it('returns the correct count when the main string contains the substring once', () => {
    expect(strCount('abc', 'b')).toBe(1);
  });

  it('returns the correct count when the main string contains the substring multiple times', () => {
    expect(strCount('abcabcabc', 'abc')).toBe(3);
  });

  it('returns the correct count when the main string contains the substring multiple times non-consecutively', () => {
    expect(strCount('abcabcabc', 'a')).toBe(3);
  });
});
