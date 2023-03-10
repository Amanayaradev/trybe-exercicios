const myRemove = require("./exercicios");
const myFizzBuzz = require("./teste");
const techList = require('./techList.js');
const hydrate = require("./hydrate");

describe('testa a função myRemove', () => {
    it('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('testando fizzbuzz', () => {
    it('testando fizzbuzz', () => {
        expect(myFizzBuzz(3).toString('fizz'));
        expect(myFizzBuzz(5).toString('buzz'));
        expect(myFizzBuzz(15).toString('fizzbuzz'));
    })
    it('retornando false', () => {
        expect(myFizzBuzz('3').toString(false));
    })
    it('retornando o valor', () => {
        expect(myFizzBuzz(1).toExponential(1));
    })
})

//

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

const skills = ['HTML', 'CSS', 'JavaScript'];

const addNewSkill = (newSkill) => {
  skills.push(newSkill);
}

test('Adiciona Jest na lista de habilidades', () => {  
  const previousLength = skills.length;
  addNewSkill('Jest');
  expect(skills).toContain('Jest');
  expect(skills).toHaveLength(previousLength + 1);
});