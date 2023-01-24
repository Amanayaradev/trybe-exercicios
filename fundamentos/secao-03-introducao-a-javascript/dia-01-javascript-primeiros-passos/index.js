const a = 1;
const b = 2;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

const a2 = 1;
const b2 = 2;

if(a > b) {
   console.log(a)
} else if(a < b) {
   console.log(b)
}

const a3 = 3;
const b3 = 3;

if(a3 === 1 && b3 === 2) {
   console.log('positive')
} else if(a3 !== 1 && b3 !== 2) {
   console.log('negative')
} else {
   console.log('zero')
}

//A soma dos ângulos internos de qualquer triângulo é sempre igual a 180

const a4 = 50;
const b4 = 60;
const c4 = 70;

if(a4 + b4 + c4 === 180) {
   console.log(true)
} else {
   console.log(false)
}

let peçaDeXadrez = 'Rainha';
let peçaDeXadrezLower = peçaDeXadrez.toLocaleLowerCase();

switch (peçaDeXadrezLower) {
   case 'rainha':
      console.log("a rainha faz o que todos os outros fazem")
   break;
   case 'rei':
      console.log("pra frente e pra trás, pro lado e pro outro")
   break;
   case 'Pião':
      console.log("pra frente e pra trás, pro lado e pro outro")
   break;
   default:
      console.log('erro')
}

const porcentagem = 90;

if(porcentagem >= 90){
   console.log('A');
} else if(porcentagem >= 80){
   console.log('B');
} else if(porcentagem >= 70){
   console.log('C')
} else if(porcentagem >= 60){
   console.log('D')
} else if(porcentagem >= 50){
   console.log('E')
} else if(porcentagem < 50){
   console.log('F')
} else if(porcentagem < 0 || porcentagem > 100){
   console.log('ERRO')
}

const num1 = 3;
const num2 = 3;
const num3 = 3;

if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
   console.log('true')
} else {
   console.log('false')
}


const num4 = 3;
const num5 = 3;
const num6 = 3;

if(num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
   console.log('true')
} else {
   console.log('false')
}


const custoDoProduto = 1;
const valorDeVenda = 3;

const produtosVendidos = 1000;
const impostoDoProdutoTotal = 20 * custoDoProduto / 100 * produtosVendidos;

const vendaTotal = produtosVendidos * valorDeVenda - impostoDoProdutoTotal;

const lucroTotal = vendaTotal  - (custoDoProduto * produtosVendidos);

if(valorDeVenda > 0 || valorDoProduto > 0) {
   console.log(lucroTotal)
} else {
   console.log(erro)
}




/*

🚀 
Utilize if/else para escrever um código que defina três números em constantes e 
retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
Utilize if/else para escrever um código que se inicie com dois valores 
em duas constantes diferentes: o custo de um produto e seu valor de venda.
 A partir dos valores, calcule quanto de lucro (valor de venda, descontado 
   o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu código também deve emitir uma mensagem de erro e encerrar caso 
algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda 
pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);
Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, 
deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55. */

