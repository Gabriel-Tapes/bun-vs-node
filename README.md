## Comparação entre Bun e Node para alguns algoritmos.

### Algoritmos utilizados:

* bubble sort
* crivo de eratóstenes
* fatorial (iterativo e recursivo)
* fibonacci (iterativo e recursivo)

Os benchmarks são feitos utilizando o [hyperfine](https://github.com/sharkdp/hyperfine).

Para rodas os benchmarks basta baixar o hyperfine e rodar o script benchmark, com a seguinte sintaxe:

```sh
> ./benchmark.sh <algoritmo> <modo> <n>
```

Onde <algoritmo> é um dos algoritmos implementados para benchmark, 
modo é a maneira que o algoritmo irá rodar (iterativo ou recursivo)
e n é o parâmetro `n` aceito por todos os algoritmos.

| Parâmetro | Possíveis Valores |
|-----------|-------------------|
| algoritmo | bubble\_sort ou eratostenes\_siege ou factorial ou fibonacci |
| modo | iterative ou tail (se houver implementação recursiva) |
| n | qualquer valor inteiro |

Por padrão serão rodados 50 tests warmup antes de se iniciar o benchmark,
onde são rodados 1000 vezes cada algorítimo.

## Sobre os algorítimos

**bubble sort**: Algoritmo iterativo simples de ordenação, na implementação desse benchmark
irá rodar sempre no pior caso. Complexidade: `O(n²)`

**crivo de eratóstenes**: Algoritmo iterativo que retorna uma lista de todos
os números primos até `n`. Complexidade `O(nlog(n))`

**fatorial**: Algoritmo iterativo e recursivo que retorna o valor do fatorial
de n. Complexidade `O(n)`

**fibonacci**: Algoritmo iterativo e recursivo que retorna o valor n da sequência
de fibonacci. Complexidade `O(n)`

*Vale ressaltar que todos os algoritmos recursivos foram implementados com
recursão de cauda*
