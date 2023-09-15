function iterFibonacci(n) {
  let a = BigInt(0), b = BigInt(1);

  for (let i = 0; i < n; ++i)
    [a, b] = [b, a + b];

  return b;
}

function tailFibonacci(n, a = BigInt(0), b = BigInt(1)) {
  if (n === 0)
    return a;

  if (n === 1)
    return b;

  return tailFibonacci(n - 1, b, a + b)
}

const execute = {
  iterative: iterFibonacci,
  tail: tailFibonacci
};

execute[process.argv[2]](process.argv[3])
