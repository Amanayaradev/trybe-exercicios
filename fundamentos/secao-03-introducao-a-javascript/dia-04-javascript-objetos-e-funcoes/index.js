// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//   };
  
//   diasDaSemana[1]; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

//   let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// let player = {
//   names: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: { 
//     golden: 2, 
//     silver: 3
//   }
// };
// console.log('A jogadora ' + player['names'], player['lastName'] + ' tem ' + player['age'] + ' anos de idade')
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]
// console.log('A jogadora ' + player['names'] + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes ');

// player.medals
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.golden + ' medalhas de prata')

//

// Copiar
// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

//Iteração nas chaves de um objeto:

// Copiar
// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// type Fiat
// model 500
// color white

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for(let teste in names) {
//   console.log('Olá ' + names[teste])
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for(let outro in car) {
//   console.log(car[outro])
// }

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado
