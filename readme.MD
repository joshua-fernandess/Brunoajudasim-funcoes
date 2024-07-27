# Maratona de Funções
###  5 - Função de números ímpares 
```javascript
function getOddNumbers(array){
    return array.filter(num => num % 2 !== 0); 
} 
```
Definição da Função:

A função getOddNumbers é definida para aceitar um parâmetro chamado array, que se espera ser um array de números.

Uso do Método filter:

O método filter é usado para criar um novo array contendo apenas os elementos que passam em uma determinada condição. A condição é especificada por uma função de callback. Função callback é uma função que é passada como argumento para outra função e é chamada (ou "executada") dentro dessa função.

Retorno da Função filter:

O método filter aplica a função de callback a cada elemento do array e inclui no novo array apenas aqueles elementos para os quais a função de callback retorna true.
Portanto, apenas os números ímpares passam pela condição e são incluídos no novo array.

Função de callback no método filter:

* ```num => num % 2 !== 0``` é uma função de callback utilizada pelo filter.

* ```num``` é um parâmetro que representa um elemento individual do array.

* ```num % 2``` calcula o resto da divisão do número num por 2.

* ```num % 2 !== 0``` verifica se o resto não é igual a 0.

* Se o resto é diferente de 0, significa que num é um número ímpar.

* Se o resto é 0, significa que num é um número par.



#### Exemplo de uso
```javascript
    const numeros = [27, 10, 3, 0, 20, 5, 6];
    const impares = getOddNumbers(numeros); 
    console.log(impares);

```

* ```const numeros = [27, 10, 3, 0, 20, 5, 6] ```
  
  Define um array chamado números contendo os números [27, 10, 3, 0, 20, 5, 6].
    
* ```const impares = getOddNumbers(numeros);```

    Chama a função ```getOddNumbers``` passando ```numeros``` como argumento e retorna um vetor contendo apenas números ímpares.

* ```console.log(impares)```
    Imprime o vetor com os números ímpares.

### 6 - Função de números pares
```javascript
function getEvenNumbers(array){
    return array.filter( num => num % 2 == 0);
}   
```

A função ```getEvenNumbers``` aceita um argumento chamado array, que é um array de números.

**Método filter:** O método filter é utilizado para criar um novo array contendo apenas os elementos que atendem a uma condição específica. Nesse caso, a condição é definida por uma função de callback.

**Função de Callback num => num % 2 == 0:**

* ```num``` representa cada elemento individual do array.
* ```num % 2 == 0``` verifica se o número num é par:
* ```num % 2``` calcula o resto da divisão do número por 2.
* Se o resto for 0 ```(num % 2 == 0)```, o número é par.

A função de callback retorna true se num for par e false caso contrário.

O método filter usa essa função de callback para decidir se um número deve ser incluído no novo array. Se o valor for true, ou seja, o número for par será adicionado no novo array.

#### Exemplo de uso 
```javascript
    const numeros = [13, 16, 30, 9, 5]
    const pares = getEvenNumbers(numeros); 
    console.log(pares) 
```


* ```const numeros = [13, 16, 30, 9, 5] ```
  
    Define um array chamado números contendo os números [13, 16, 30, 9, 5].
    
* ```const pares = getEvenNumbers(numeros);```

    Chama a função ```getEvenNumbers``` passando ```numeros``` como argumento e retorna um vetor contendo apenas números pares.

* ```console.log(impares)```
    Imprime o vetor com os números pares.

### 7 - Função para contar vogais
```javascript
 function countVowels(string){
    const vowels ='aeiouAEIOU';
    let contador = 0; 
    for (let i =0; i < string.length; i++){ 
        if (vowels.includes(string[i])){ 
            contador++; 
        }
    }
    
    return contador;
}
```

```const vowels ='aeiouAEIOU';``` Define um conjunto de vogais incluindo letras minúsculas e maiúsculas

```let contador = 0;``` Variável para contar as vogais iniciada com valor de 0

```for (let i =0; i < string.length; i++)``` Percorre cada caractere da string
        
``` if (vowels.includes(string[i])){``` Condição para verificar se os caracteres são vogais

```contador++;``` Incrementa o contador se for uma vogal

```return contador;``` Retorna o número de vogais
#### Exemplo de uso:
```javascript
(console.log(countVowels("O Bruno sempre ajuda :)")));
``` 
Imprime o número de vogais que a string "O Bruno sempre ajuda :)" contém, chamando a função countVowels que faz a contagem das vogais dessa string e retorna seu total.

### 8 - Função de Triângulos
```javascript
function drawTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}
```

* ```for (let i = 1; i <= n; i++)``` utilizamos o laço de repetição ```for``` que inicia um loop que começa com i igual a 1 e continua até i ser igual a n, que representa a altura do triângulo.
* A cada iteração, i é incrementado em 1.
* ```'*'.repeat(i)``` cria uma string que consiste em i asteriscos.

    O método ```repeat()``` repete o caractere * o número de vezes desejado
* ```console.log('*'.repeat(i));``` imprime essa string no console. 
* Cada iteração do loop imprimirá uma nova linha no console com o número apropriado de asteriscos.

#### Exemplo de uso:
```drawTriangle(3)``` - chama a função drawTriangle e como já há um console.log dentro da função imprime diretamente o triângulo. 

Referência:
[Youtube](https://www.youtube.com/watch?v=hpgXr4B9eC)
