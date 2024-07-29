/*
Crie uma função chamada sumTwoNumbers que aceite dois números como parâmetros e retorne
a soma deles.

Programa desenvolvido por:
 - Adriane	
 - Andressa
 - Bruno
 - Joshua
*/

function sumTwoNumbers(numeros){
    let soma = numeros.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
    return soma;
}

let numeros = [15, 25];
let soma = sumTwoNumbers(numeros);
console.log(soma);

//numeros.reduce; executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos)
//acumulador; valor inicial (ou o valor do callback anterior)
//valorAtual; o valor do elemento atual
//Refêrencia MDN Web Docs