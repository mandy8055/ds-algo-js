/**
 1. You are required to display the prime factorization of a number.
 2. Take as input a number n.
 3. Print all its prime factors from smallest to largest.
 4. Number is guaranteed to be greater than 1
*/

import isPrime from '../utils/is-prime.mjs';

export default function printPrimeFactors(num) {
  let result = '';
  // base case1
  if (isPrime(num)) {
    return `1 ${num}`;
  }

  if (num < 2) {
    return 'no prime factors';
  }

  for (let i = 2; i * i <= num; i++) {
    if (isPrime(i)) {
      while (num % i === 0) {
        result = result + i + ' ';
        num /= i;
        if (num === 1) return result.trim();
      }
    }
  }

  return result + num;
}
