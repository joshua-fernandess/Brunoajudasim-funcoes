# Maratona de Funções
###  5 - Função de números ímpares 
```
function getOddNumbers(array){
    return array.filter( num => num % 2 !== 0); 
} 
```


Função de Callback, ou seja, é uma função que é passada como argumento para outra função e é chamada (ou "executada") dentro dessa função.

```num => num % 2 !== 0``` é uma função de callback utilizada pelo filter.

```num``` é um parâmetro que representa um elemento individual do array.

```num % 2``` calcula o resto da divisão do número num por 2.

```num % 2 !== 0``` verifica se o resto não é igual a 0.

Se o resto é diferente de 0, significa que num é um número ímpar.

Se o resto é 0, significa que num é um número par.

Retorno da Função filter:
O método filter aplica a função de callback a cada elemento do array e inclui no novo array apenas aqueles elementos para os quais a função de callback retorna true.
Portanto, apenas os números ímpares passam pela condição e são incluídos no novo array.


```const numeros = [27, 10, 3, 0, 20, 5, 6] ```

Cria um array chamado números com seus valores
    
```const impares = getOddNumbers(numeros);```

    
 Chama a função ```getOddNumbers``` passando ```numeros``` como argumento e retorna um vetor contendo apenas números ímpares.

```console.log(impares)```
    Imprime o vetor com os números ímpares.