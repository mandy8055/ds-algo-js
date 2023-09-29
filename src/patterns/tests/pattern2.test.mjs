import pattern2 from '../pattern2.mjs';

describe('pattern2', () => {
  it('returns the correct pattern for n=1', () => {
    expect(pattern2(1)).toBe('*\t\n');
  });

  it('returns the correct pattern for n=2', () => {
    expect(pattern2(2)).toBe('*\t*\t\n*\t\n');
  });

  it('returns the correct pattern for n=3', () => {
    expect(pattern2(3)).toBe('*\t*\t*\t\n*\t*\t\n*\t\n');
  });
});
