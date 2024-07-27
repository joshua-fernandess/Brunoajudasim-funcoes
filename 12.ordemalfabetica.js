/*
Crie uma função chamada alphabeticalOrder que aceite uma string e retorne uma nova
string com as letras ordenadas em ordem alfabética.

Dica: Utilize o método split para converter a string em um array de caracteres.
Utilize o método sort para ordenar os caracteres. Utilize o método join para
juntar os caracteres em uma nova string.

Programa desenvolvido por:
 - Adriane	
 - Andressa
 - Bruno
 - Joshua
*/

function alphabeticalOrder(string){
    let vetorString = string.split('');
    vetorString.sort();
    vetorOrdem = vetorString.join('');
    return vetorString;
}

console.log(alphabeticalOrder("adriane")); 
console.log(alphabeticalOrder("bruno"));       
console.log(alphabeticalOrder("andressa"));  
console.log(alphabeticalOrder("joshua"));     