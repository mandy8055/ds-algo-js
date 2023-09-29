import pattern16 from '../pattern16.mjs';

describe('pattern16 function', () => {
  it('returns empty string when n is 0', () => {
    expect(pattern16(0)).toBe('');
  });

  it('returns the correct pattern for n=1', () => {
    const expectedPattern = '1\t\n';
    expect(pattern16(1)).toBe(expectedPattern);
  });

  it('returns the correct pattern for n=3', () => {
    const expectedPattern = '1\t\t\t\t1\t\n1\t2\t\t2\t1\t\n1\t2\t3\t2\t1\t\n';
    expect(pattern16(3)).toBe(expectedPattern);
  });
});
