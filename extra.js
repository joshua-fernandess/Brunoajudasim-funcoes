/*
Este é um arquivo com desafios extras. Eles são mais difíceis e vão exigir mais pesquisa.
Se você não conseguir fazer todos, não tem problema, se concentre nos exercícios do 1 ao 12.

1. Crie uma função chamada intersection que aceite dois arrays e retorne um novo array contendo
apenas os elementos que estão presentes em ambos os arrays.

Dica: Utilize o método filter para encontrar os elementos comuns. Utilize o método
includes para verificar se um elemento está presente no outro array.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function intersection(vetor1, vetor2) {
    let array1 = new Set(vetor1)

    let array2 = vetor2.filter(numero => array1.has(numero))

        return array2
}

console.log(intersection([1, 2, 3], [3, 4, 5]))

/*
2. Crie uma função chamada drawEvenNumberTriangle que aceite um número n, use a função
getEvenNumbers para gerar os primeiros n números pares e, em seguida, use esses números
para desenhar um triângulo no console.

Dica: Primeiro, crie a função getEvenNumbers que retorna os primeiros n números pares.
Use um laço para iterar desde 1 até n e, em cada iteração, imprima os primeiros i
números pares. Utilize a função getEvenNumbers para obter os números pares.
*/

function getEvenNumbers(n) {
    let pares = []
    
    for(let i = 0 ; i < n; i++) {
        pares.push(i * 2)
    }
    return pares
}

function drawEvenNumberTriangle(n) {
    let pares = getEvenNumbers(n *(n + 1 ) / 2)

    let index = 0

    for(let i = 1; i <= n; i++) {
        let linha = ''
        for(let l = 0; l < i; l++) {
            if(index < pares.length) {
            linha += pares[index] + ' '
            index++
            }
        }
        console.log(linha.trim())
    }
}

console.log(drawEvenNumberTriangle(5))