const myRemove = require("./exercicios");
const myFizzBuzz = require("./teste")

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
        expect(myFizzBuzz(3, 5).toString('fizzbuzz'));
    })
})