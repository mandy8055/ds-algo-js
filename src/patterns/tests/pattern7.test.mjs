import pattern7 from '../pattern7.mjs';

describe('pattern7', () => {
  it('returns empty string when n is 0', () => {
    expect(pattern7(0)).toBe('');
  });

  it('returns empty string when n is negative', () => {
    expect(pattern7(-5)).toBe('');
  });

  it('returns single asterisk when n is 1', () => {
    expect(pattern7(1)).toBe('*\n');
  });
  it('returns single asterisk when n is 5', () => {
    expect(pattern7(5)).toBe(
      '* \t \t \t \t\n \t* \t \t \t\n \t \t* \t \t\n \t \t \t* \t\n \t \t \t \t*\n',
    );
  });

  it('returns correct pattern when n is a large number', () => {
    const result = pattern7(1000);
    // Check the first line
    expect(result.split('\n')[0]).toBe('*' + ' \t'.repeat(999));
    // Check the last line
    expect(result.split('\n')[999]).toBe(' \t'.repeat(999) + '*');
  });
});
