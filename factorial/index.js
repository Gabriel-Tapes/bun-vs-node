function iterFat(n) {
  let result = BigInt(1);
  for (let i = BigInt(1); i < n; ++i)
    result *= i;

  return result;
}

function tailFat(n, fat = BigInt(1)) {
  if (n === BigInt(0))
    return fat;

  return tailFat(n - BigInt(1), fat * n);
}

const execute = {
  iterative: iterFat,
  tail: tailFat,
}

execute[process.argv[2]](BigInt(process.argv[3]));
