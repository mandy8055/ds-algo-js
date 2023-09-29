import pattern1 from '../pattern1.mjs';

describe('Pattern1', () => {
  it('should generate the correct pattern for n = 3', () => {
    const result = pattern1(3);
    const expected = '*\t\n*\t*\t\n*\t*\t*\t\n';
    expect(result).toBe(expected);
  });

  it('should generate the correct pattern for n = 1', () => {
    const result = pattern1(1);
    const expected = '*\t\n';
    expect(result).toBe(expected);
  });

  it('should generate the correct pattern for n = 0', () => {
    const result = pattern1(0);
    const expected = '';
    expect(result).toBe(expected);
  });
});
