import strDist from '../problem30.mjs';

describe('strDist function', () => {
  it('should return 0 when the substring is longer than the string', () => {
    expect(strDist('abc', 'abcd')).toBe(0);
  });

  it('should return the correct distance when the string starts with the substring', () => {
    expect(strDist('abcabc', 'abc')).toBe(6);
  });

  it('should return the correct distance when the string does not start with the substring', () => {
    expect(strDist('xabcabc', 'abc')).toBe(6);
  });

  it('should return 0 when the string does not contain the substring', () => {
    expect(strDist('xyz', 'abc')).toBe(0);
  });

  it('should return 0 when the string is empty', () => {
    expect(strDist('', 'abc')).toBe(0);
  });
});
