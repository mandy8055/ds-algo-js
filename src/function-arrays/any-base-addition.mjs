// Numbers provided will be greater than or equal to 0.

export default function anyBaseAddition(num1, num2, base) {
  let carry = 0,
    result = 0,
    power = 0;

  if (num1 < 0 || num2 < 0) {
    throw new Error('Numbers provided should be greater than or equal to 0');
  }

  while (num1 > 0 || num2 > 0) {
    let d1 = num1 % 10;
    let d2 = num2 % 10;
    let tempResult = d1 + d2 + carry;
    if (tempResult >= base) {
      carry = Math.floor(tempResult / base);
      tempResult %= base;
    } else {
      carry = 0;
    }
    result += tempResult * 10 ** power;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    power++;
  }

  if (carry) {
    result += carry * 10 ** power;
  }

  return result;
}
