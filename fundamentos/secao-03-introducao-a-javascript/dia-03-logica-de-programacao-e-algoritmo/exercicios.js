// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// criar um for que percorra de 10 para trás
// multiplicar cada item do for
// imprimir o resultado final

// let dez = 10;
// let fatorial = 1;
// for(let index = dez; index >= 1; index -= 1) {
//     fatorial *= index;
// }

// console.log(fatorial)

// Utilize a estrutura de repetição for para desenvolver um algoritmo
// que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” 
// seria invertida para “ananab”. Utilize a string abaixo como exemplo, 
// depois image.pngtroque por outras para verificar se seu algoritmo está funcionando corretamente.
// let stringInvertida = "";
// let stringFatiada = [];
// stringFatiada = inverter.split("");
// let stringReverse = stringFatiada.reverse()
// for (let i = 0; i < inverter.length; i++) {
//     stringInvertida = stringReverse.join("")
// }
// console.log(stringInvertida);

let inverter = 'tryber';
let inversao = '';
for(let index = inverter.length - 1; index >= 0; index -= 1) {
    inversao += inverter[index];
}
console.log(inversao)

