/**
 * Constraints
 *  0 <= num2 <= num1
 *  2 <= base <= 10
 */

export default function anyBaseSubtraction(num1, num2, base) {
  let result = 0,
    power = 0,
    borrow = 0;
  while (num1 > 0 || num2 > 0) {
    let d1 = num1 % 10;
    let d2 = num2 % 10;
    let tempResult;
    if (d1 < d2 + borrow) {
      d1 += base;
      tempResult = d1 - (d2 + borrow);
      borrow = 1;
    } else {
      tempResult = d1 - (d2 + borrow);
      borrow = 0;
    }
    result += tempResult * 10 ** power;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    power++;
  }
  return result;
}
