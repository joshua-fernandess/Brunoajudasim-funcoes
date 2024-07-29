/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Adriane	
 - Andressa
 - Bruno
 - Joshua
*/

function averageArray(numeros){
    if (numeros.length === 0)
        return 0
        
    let soma = 
    numeros.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
    return soma / numeros.length
    }
let numeros = [25, 35, 45, 55, 65]
let media = 0
console.log(averageArray(numeros))


//Referência: MDN web Docs
//a função reducer recebe 4 parâmetros
//acumulador - valor inicial (ou o valor do callback anterior)
//valorAtual - o valor do elemento atual
//array - o array onde a iteração está ocorrendo