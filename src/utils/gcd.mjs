export default function gcd(num1, num2) {
  if (num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  while (num2 !== 0) {
    let temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }

  return num1;
}
