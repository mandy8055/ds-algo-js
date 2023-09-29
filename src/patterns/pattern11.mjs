export default function pattern11(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Provided number must be a positive integer');
  }
  let result = '',
    count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += count + '\t';
      count++;
    }
    result += '\n';
  }

  return result;
}
