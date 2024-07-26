/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Adriane	
 - Andressa
 - Bruno
 - Joshua
*/

function findMax(vetor){
    let maior = vetor[0]
    vetor.forEach(numero => {
        if(numero > maior){
            maior = numero
        }

    });
    return maior;
}  

console.log(findMax([1,2,3,4,5]))
