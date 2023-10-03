/* 
1. You are given a decimal number n.
2. You are given a base b.
3. You are required to convert the number n into its corresponding value in base b.

Constraints:
2 <= b <= 10

A number representing corresponding value of n in number system of base b
 */

export default function decimalToAnyBase(n, b) {
  let result = 0;
  let power = 1;
  while (n !== 0) {
    let rem = n % b;
    result += rem * power;
    power *= 10;
    n = Math.floor(n / b);
  }

  return result;

  // Javascript specific way
  //   return Number(n.toString(b));
}
