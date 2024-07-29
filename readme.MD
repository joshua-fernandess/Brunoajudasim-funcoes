# Maratona de Funções
### 1 - Função de maior número

### 2 - Função saudar usuário

### 3 - Função string reversa

### 4 - Função números primos

### 5 - Função de números ímpares 
```javascript
function getOddNumbers(array){
    return array.filter(num => num % 2 !== 0); 
} 
```
A função getOddNumbers é definida para aceitar um parâmetro chamado array, que se espera ser um array de números.

O método filter é usado para criar um novo array contendo apenas os elementos que passam em uma determinada condição. 

A condição é especificada por uma função de callback. Função callback é uma função que é passada como argumento para outra função e é chamada (ou "executada") dentro dessa função.

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

O método filter é utilizado para criar um novo array contendo apenas os elementos que atendem a uma condição específica. Nesse caso, a condição é definida por uma função de callback.

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
 
### 9 - Função de soma
``` javascript
function sumTwoNumbers(numeros){
    let soma = numeros.reduce((acumlador,valorAtual) => acumlador + valorAtual, 0)
    return soma;
```
* ``` numeros.reduce; ``` executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos)
* ``` acumulador; ``` valor inicial (ou o valor do callback anterior)
* ``` valorAtual; ``` o valor do elemento atual

#### Exemplo de uso: 

```javascript 
let numeros = [15, 25, 35, 45, 55, 65];
let soma = sumTwoNumbers(numeros);
console.log(soma);
```
Chama a função sumTwoNumbers e imprimi a soma dos números do vetor numeros;

Refêrencia MDN Web Docs
### 10 - Função de converter minutos para segundos

``` javascript 
function minutesToSeconds(minutos){
    segundos = minutos * 60;
    return segundos;
}
```
* ``` segundos = minutos * 60; ``` Convertemos minutos para segundos multiplicando por 60.

* ``` return segundos; ``` Retorna o valor em segundos

#### Exemplo de uso: 
```javascript 
console.log(minutesToSeconds(5) + ' segundos');
console.log(minutesToSeconds(20) + ' segundos');
```
Chama a função minutesToSeconds e imprime o valor já convertido de minutos para segundos. 

### 11 - Função média de um array

```javascript
function averageArray(numeros){
    if (numeros.length === 0)
        return 0
        
    let soma = 
    numeros.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
    return soma / numeros.length
    }
```
* ``` === 0;``` Operador de comparação, verefica se o valor é exatamente igual a 0;
* ```numeros.reduce;``` É utlizado para reduzir um array a um único valor, aplicando uma função fornecida a um acumulador e a cada valor de array;
* ```numeros.length;``` Retorna o número de elementos da array;

#### Exemplo de uso:
``` javascript
let numeros = [25, 35, 45, 55, 65]
let media = 0
console.log(averageArray(numeros))
```
Chama a função averageArray e imprimi a média do vetor numero.

### 12 - Função ordem alfabética

```javascript 
function alphabeticalOrder(string){
    let vetorString = string.split('');
    vetorString.sort();
    vetorOrdem = vetorString.join('');
    return vetorString;
}
```
* ```let vetorString = string.split('');```
Utilizamos o método split para converter a string em um array de caracteres.
* ```vetorString.sort();``` Utilizamos  o método sort para ordenar os caracteres. 
* ```vetorOrdem = vetorString.join('');``` Utilizamos o método join para juntar os caracteres em uma nova string.


#### Exemplo de uso:
``` javascript

console.log(alphabeticalOrder("adriane")); 
console.log(alphabeticalOrder("bruno"));       
console.log(alphabeticalOrder("andressa"));  
console.log(alphabeticalOrder("joshua"));  
```
Chama a função alphabeticalOrder e imprime os caracteres das strings já de forma ordenada.



#### 💻 Devs: 
**Bruno, Adriane, Joshua, Andressa.**