// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem vinda ' + info.personagem);
// info['recorrente'] = 'Sim'
// console.log(info)

// for(let i in info) {
//     console.log(info[i])
// }
// info.personagem = 'Tio Patinhas';
// info.origem = '‘Christmas on Bear Mountain, Dell’s Four Color Comics #178';
// info.nota = 'O último MacPatinhas’';
// console.log(info)

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// console.log('O livro favorito de ' + leitor.nome, leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },
);
console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos');