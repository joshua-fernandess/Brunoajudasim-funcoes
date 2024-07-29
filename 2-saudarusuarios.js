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
    return nomes.reduce((saudacao, nome, indice) => {
        if (indice === 0) {
            return `Olá, ${nome}`;
        } else{
            return `${saudacao}, ${nome}`
        }
    })

}

let nomes = ["Andressa", "Adriane", "Bruno", "Joshua"]
let saudacao = greetUsers(nomes)

console.log(saudacao)