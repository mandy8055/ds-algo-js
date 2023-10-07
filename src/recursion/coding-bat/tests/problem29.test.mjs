import strCopies from '../problem29.mjs';

describe('strCopies function', () => {
  it('should return true when the string contains the required number of copies of the substring', () => {
    expect(strCopies('abcabcabc', 'abc', 3)).toBe(true);
    expect(strCopies('xyzxyzxyz', 'xyz', 3)).toBe(true);
    expect(strCopies('abcabcabcabc', 'abc', 4)).toBe(true);
  });

  it('should return false when the string does not contain the required number of copies of the substring', () => {
    expect(strCopies('abcabcabc', 'abc', 4)).toBe(false);
    expect(strCopies('xyzxyzxyz', 'xyz', 4)).toBe(false);
    expect(strCopies('abcabcabcabc', 'abc', 5)).toBe(false);
  });

  it('should return true when the required number of copies is 0', () => {
    expect(strCopies('abcabcabc', 'abc', 0)).toBe(true);
    expect(strCopies('xyzxyzxyz', 'xyz', 0)).toBe(true);
    expect(strCopies('abcabcabcabc', 'abc', 0)).toBe(true);
  });

  it('should return false when the substring is longer than the string', () => {
    expect(strCopies('abc', 'abcd', 1)).toBe(false);
    expect(strCopies('xyz', 'xyzx', 1)).toBe(false);
  });
});
