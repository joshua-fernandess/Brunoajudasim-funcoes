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
    let soma = numeros.reduce((acumlador,valorAtual) => acumlador + valorAtual, 0)
    return soma;
}

let numeros = [15, 25, 35, 45, 55, 65];
let soma = sumTwoNumbers(numeros);
console.log(soma);
