const myList = [5, 2, 3];

// escreva swap abaixo
const teste1 = ([n1, n2, n3]) => [n3, n2, n1];
// console.log(teste1(myList))

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo
const toObject = ([nome, modelo, ano]) => ({nome, modelo, ano});
// console.log(toObject(palio))

// // escreva greet abaixo

const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}`;

// // Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// const student1 = {
//     name: `Claudia`,
//     lastName: `Farias`,
//     age: 23,
//   }
  
//   const student2 = {
//     name: `Vitor`,
//     age: 20,
//   }
  
  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  const getLastName = ({lastName = 'lastName não preenchido'}) => lastName;
  
//   console.log(getLastName(student1));
//   console.log(getLastName(student2));

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [student1, student2, student3, student4, student5] = moreStudents.flat(1);

console.log(student1, student2, student3, student4, student5);