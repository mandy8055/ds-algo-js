import gcd from './gcd.mjs';

export default function lcm(num1, num2) {
  const getGCD = gcd(num1, num2);
  return (num1 * num2) / getGCD;
}
