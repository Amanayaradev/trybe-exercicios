// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// criar um for que percorra de 10 para trás
// multiplicar cada item do for
// imprimir o resultado final

// for(let index02 = 9; index02 >= 1; index02 -= 1){
//     fatorial.push(index * index02);
// }

let dez = 10;
let fatorial = 1;
for(let index = dez; index >= 1; index -= 1) {
    fatorial *= index;
}

console.log(fatorial)