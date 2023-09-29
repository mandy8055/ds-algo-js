// Eratosthenes sieve
export default function printPrimesTillN(n) {
  // initialize a boolean array and fill them all true
  const primes = new Array(n + 1);
  primes.fill(true);
  // Mark 0 and 1 as not primes since they're not
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  const result = [];
  for (const [i, v] of primes.entries()) {
    if (v) {
      result.push(i);
    }
  }
  return result;
}
