// function adicao(n1, n2) {
//     return n1 + n2;
// }
//  console.log(adicao(1, 2));

//  function subtracao(n1, n2) {
//     return n1 - n2;
// }
//  console.log(subtracao(1, 2));

//  function multiplicacao(n1, n2) {
//     return n1 * n2;
// }
//  console.log(multiplicacao(1, 2));

//  function divisao(n1, n2) {
//     return n1 / n2;
// }
//  console.log(divisao(1, 2));

//  function modulo(n1, n2) {
//     return n1 % n2
// }
//  console.log(modulo(1, 2));

function maiorNumero(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else if (n1 < n2) {
        return n2;
    } else {
        return 'são numeros iguais';
    }
}
console.log(maiorNumero(2, 1));