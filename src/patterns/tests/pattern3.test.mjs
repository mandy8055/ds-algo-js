import pattern3 from '../pattern3.mjs';

describe('pattern3', () => {
  it('should return empty string when n is 0', () => {
    expect(pattern3(0)).toBe('');
  });
  it('returns the correct pattern for n=1', () => {
    expect(pattern3(1)).toBe('*\t\n');
  });

  it('returns the correct pattern for n=3', () => {
    expect(pattern3(3)).toBe(' \t \t*\t\n \t*\t*\t\n*\t*\t*\t\n');
  });
});
