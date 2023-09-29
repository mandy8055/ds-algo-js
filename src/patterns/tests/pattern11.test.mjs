import pattern11 from '../pattern11.mjs';

it('pattern11 generates correct pattern for n=3', () => {
  const expectedPattern = '1\t\n2\t3\t\n4\t5\t6\t\n';
  expect(pattern11(3)).toBe(expectedPattern);
});
it('pattern11 generates correct pattern for n=5', () => {
  const expectedPattern =
    '1\t\n2\t3\t\n4\t5\t6\t\n7\t8\t9\t10\t\n11\t12\t13\t14\t15\t\n';
  expect(pattern11(5)).toBe(expectedPattern);
});

it('pattern11 throws error for n=0', () => {
  expect(pattern11(0)).toBe('');
});

it('pattern11 throws error for negative n', () => {
  expect(() => pattern11(-3)).toThrow(
    'Provided number must be a positive integer',
  );
});

it('pattern11 throws error for non-integer n', () => {
  expect(() => pattern11(1.5)).toThrow(
    'Provided number must be a positive integer',
  );
});
