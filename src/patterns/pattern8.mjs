export default function pattern8(n) {
  if (n < 0 || !Number.isInteger(n))
    throw new Error('n should be positive or integer');
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === n - i + 1) {
        result += '*\t';
      } else {
        result += ' \t';
      }
    }
    result += '\n';
  }

  return result;
}
