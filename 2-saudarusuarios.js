/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Adriane	
 - Andressa
 - Bruno
 - Joshua
*/

function greetUsers(nomes){
    nomes.forEach(nome => {
        console.log(`ola ${nome}`)        
    });    
}
greetUsers(['bruno', 'okokok'])