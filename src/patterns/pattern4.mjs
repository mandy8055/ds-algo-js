export default function pattern4(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let spaces = 1; spaces <= i - 1; spaces++) {
      result += ' \t';
    }
    for (let j = n; j >= i; j--) {
      result += '*\t';
    }
    result += '\n';
  }
  return result;
}
