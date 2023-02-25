const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionaTurno(obj, chaves, valorChave){
  obj[chaves] = valorChave;
}
adicionaTurno(lesson2, 'turno', 'noite');

function listaKeys(objt){
  return Object.keys(objt);
}
listaKeys(lesson1)

function tamanhoDeObjeto(objto) {
  return Object.keys(objto).length;
}
tamanhoDeObjeto(lesson1);

const objectValores = (objcts) => Object.values(objcts);
objectValores(lesson3)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const numeroTotalDeEstudantes = (objcts) =>{
  let contagem = 0;
  for(let i in objcts){
    contagem += objcts[i].numeroEstudantes;
  }
  return contagem;
}
numeroTotalDeEstudantes(allLessons);


const pegarChaveNumerada = (obt, nArray) =>{
  const arrayObjeto = Object.values(obt);
  return arrayObjeto[nArray];
}
pegarChaveNumerada(lesson3, 0)

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
};
verifyPair(lesson2,'professor','Carlos');

const somaEstudantesDeMatematica = (obo) => {
  let total = 0;
  const objArray = Object.values(obo);
  for(i in objArray){
    if(objArray[i].materia === 'Matemática'){
      total += objArray[i].numeroEstudantes;
    }
  }
  return total;
}
somaEstudantesDeMatematica(allLessons);