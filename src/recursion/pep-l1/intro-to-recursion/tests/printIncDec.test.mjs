import printIncDec from '../printIncDec.mjs';

describe('printIncDec', () => {
  test('prints numbers in increasing and decreasing order', () => {
    expect(printIncDec(1)).toBe('1');
    expect(printIncDec(2)).toBe('2\n1\n2');
    expect(printIncDec(3)).toBe('3\n2\n1\n2\n3');
    expect(printIncDec(4)).toBe('4\n3\n2\n1\n2\n3\n4');
  });

  test('throws error for non-integer inputs', () => {
    expect(() => printIncDec('a')).toThrow();
    expect(() => printIncDec(1.5)).toThrow();
    expect(() => printIncDec(null)).toThrow();
  });

  test('throws error for negative inputs', () => {
    expect(() => printIncDec(-1)).toThrow();
  });
});
