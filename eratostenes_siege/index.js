function eratostenes_siege(n) {
  if (n < 2) return [];

  const primes = Array.from({ length: n }, () => true);

  const lim = Math.sqrt(n);

  for (let i = 2; i < lim; ++i) {
    if (primes[i]) {
      for (let k = 0; k < n; ++k) {
        const j = i * (i + k);

        if (j > n) {
          primes[j] = false;
          break;
        }

        primes[j] = false;
      }
    }
  }

  return primes.reduce((acc, value, index) => {
    if (value === true) acc.push(index);

    return acc;
  }, [])
}

const execute = {
  iterative: eratostenes_siege
}

execute[process.argv[2]](process.argv[3])
