export default function anyBaseToDecimal(n, b) {
  let result = 0;
  let power = 0;
  let temp = Math.abs(n);
  while (temp !== 0) {
    let rem = temp % 10;
    if (rem >= b) {
      throw new Error(`Invalid digit ${rem} for base ${b}`);
    }
    result += rem * b ** power;
    power++;
    temp = Math.floor(temp / 10);
  }

  return n < 0 ? -result : result;
  //   return parseInt(String(n), b);
}
