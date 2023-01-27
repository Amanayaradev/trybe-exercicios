// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let soma = 0;
for(let index = 1; index <= 50; index += 1) {
    soma += index;
}
console.log('A soma total de 1 a 50 é: ' + soma)
//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let contador = 0;
for(let index = 2; index <= 150; index += 1) {
    if(index % 3 === 0) {
        contador += 1;
    }
}
if(contador === 50) {
    console.log('Mensagem secreta!!!!')
}

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 16;
if(idade >= 18) {
    console.log('A pessoa é maior idade')
} else{
    console.log('Pessoa menor de idade')
}