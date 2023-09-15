Hardware utilizado:

OS: Arch Linux X86\_64
HOST: Acer Aspire E21-572 V1.06
KERNEL: 6.1.39-1-lts
CPU: Intel i3-6100U (4) @ 2.300GHz
RAM: 8GB DDR3L

Node version: 20.6.1
Bun version: 1.0.1

# Bubble Sort

Comando Utilizado: ./benchmark.sh bubble\_sort iterative 100

Benchmark 1: node bubble\_sort/index.js iterative 100
  Time (mean ± σ):     140.0 ms ±   2.3 ms    [User: 142.6 ms, System: 49.2 ms]
  Range (min … max):   130.9 ms … 190.3 ms    1000 runs

Benchmark 2: bun bubble\_sort/index.js iterative 100
  Time (mean ± σ):      18.7 ms ±   6.4 ms    [User: 9.8 ms, System: 10.9 ms]
  Range (min … max):    16.5 ms … 183.4 ms    1000 runs

# Crivo de Eratóstenes

Comando Utilizado: ./benchmark.sh eratostenes\_siege iterative 1000

Benchmark 1: node eratostenes\_siege/index.js iterative 1000
  Time (mean ± σ):     136.5 ms ±  14.1 ms    [User: 136.3 ms, System: 48.2 ms]
  Range (min … max):   128.9 ms … 520.3 ms    1000 runs

Benchmark 2: bun eratostenes_siege/index.js iterative 1000
  Time (mean ± σ):      19.4 ms ±   1.8 ms    [User: 10.8 ms, System: 11.2 ms]
  Range (min … max):    17.2 ms …  41.2 ms    1000 runs

# Fatorial

**Comando Utilizado**: ./benchmark.sh factorial iterative 100

Benchmark 1: node factorial/index.js iterative 100
  Time (mean ± σ):     136.8 ms ±   1.8 ms    [User: 136.3 ms, System: 49.3 ms]
  Range (min … max):   129.1 ms … 154.0 ms    1000 runs

Benchmark 2: bun factorial/index.js iterative 100
  Time (mean ± σ):      20.1 ms ±  16.2 ms    [User: 8.8 ms, System: 10.2 ms]
  Range (min … max):    14.2 ms … 199.8 ms    1000 runs

**Comando Utilizado**: ./benchmark.sh factorial tail 100

Benchmark 1: node factorial/index.js tail 100
  Time (mean ± σ):     137.2 ms ±  10.0 ms    [User: 136.2 ms, System: 49.3 ms]
  Range (min … max):   128.4 ms … 392.6 ms    1000 runs

Benchmark 2: bun factorial/index.js tail 100
  Time (mean ± σ):      17.1 ms ±   1.0 ms    [User: 8.3 ms, System: 9.9 ms]
  Range (min … max):    14.6 ms …  20.4 ms    1000 runs

# Fibonacci

**Comando Utilizado**: ./benchmark.sh fibonacci iterative 100

Benchmark 1: node fibonacci/index.js iterative 100
  Time (mean ± σ):     139.3 ms ±   1.5 ms    [User: 136.5 ms, System: 50.8 ms]
  Range (min … max):   132.9 ms … 148.8 ms    1000 runs

Benchmark 2: bun fibonacci/index.js iterative 100
  Time (mean ± σ):      17.6 ms ±   1.0 ms    [User: 7.9 ms, System: 10.4 ms]
  Range (min … max):    15.2 ms …  20.5 ms    1000 runs

**Comando Utilizado**: ./benchmark.sh fibonacci tail 100

Benchmark 1: node fibonacci/index.js tail 100
  Time (mean ± σ):     140.3 ms ±   3.1 ms    [User: 137.3 ms, System: 50.8 ms]
  Range (min … max):   130.5 ms … 162.8 ms    1000 runs

Benchmark 2: bun fibonacci/index.js tail 100
  Time (mean ± σ):      18.8 ms ±   1.0 ms    [User: 9.1 ms, System: 10.5 ms]
  Range (min … max):    16.1 ms …  22.7 ms    1000 runs
