export default function pattern14(n) {
  if (n < 1) {
    throw new Error('Please enter numbers greater than 0');
  }
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${n} * ${i} = ${n * i}\n`;
  }
  return result;
}
