// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = [];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > 0) {
//     negativeNumbers.push(numbers[index] * -1);
//   } else {
//     negativeNumbers.push(numbers[index]);
//   }
// }

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

// const prices = [2.99, 3.99, 1.5, 2];
//                        // prod          //preço
// const updateProducts = (listProducts, listPrices) => listPrices.map((product, index) => (
//   { [listProducts[index]]:product  }
// ));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);
// // => [
// //   { Arroz: 2.99 },
// //   { Feijao: 3.99 },
// //   { Alface: 1.5 },
// //   { Tomate: 2 },
// // ]
// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

// const paresMenoresQueCinco = [];
// numeros.forEach((numero) => {
//   if (numero < 5 && numero % 2 === 0) {
//     paresMenoresQueCinco.push(numero);
//   }
// });
// console.log(paresMenoresQueCinco); // Retorno: [2, 4]
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];
 
//   const allNameStudents = [];

//   for (let index = 0; index < estudantes.length; index += 1 ) {
//     if(estudantes[index].turno === 'Manhã') {
//       allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
//     }
//   }
  
//   console.log(allNameStudents);

// const allNameStudents = estudantes.filter((estudante) => (
//     estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
//   console.log(allNameStudents);

// const findStudent = (name, students) => {
//     for (let index = 0; index < students.length; index += 1) {
//       if (students[index].nome === name) {
//         return students[index];
//       }
//     }
//   };
  
//   const reportStatus = (name, students) => {
//     const getStudent = findStudent(name, students);
//     const report = [];
//     for (let index = 0; index < getStudent.materias.length; index += 1) {
//       if (getStudent.materias[index].nota >= 60) {
//         report.push(`${getStudent.materias[index].name} Aprovado`);
//       } else {
//         report.push(`${getStudent.materias[index].name} Reprovado`);
//       }
//     }
//     return report;
//   };
  
//   console.log(reportStatus('Natalia', estudantes));

const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
     `${materia.name} ${materia.nota} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus('Natalia', estudantes));
  