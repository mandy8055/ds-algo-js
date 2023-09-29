export default function pattern3(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let spaces = n - i; spaces >= 1; spaces--) {
      result += ' \t';
    }
    for (let j = 1; j <= i; j++) {
      result += '*\t';
    }
    result += '\n';
  }
  return result;
}
