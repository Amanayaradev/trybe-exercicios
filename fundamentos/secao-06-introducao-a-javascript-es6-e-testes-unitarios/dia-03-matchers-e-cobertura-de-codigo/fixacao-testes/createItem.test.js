const { default: expect } = require('expect');
const createItem = require('./createItem');
describe('a função createItem', () => {
    it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 })
  });
  it('utiliza zero como quantidade padrão', () => {
    const propriedade = 0;
    expect(createItem('banana', 'kg', 1.99)).toHaveProperty("quantity", propriedade,)
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error)
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1 , 'kg', 1.99)).toThrow()
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -1)).toThrow()
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0)).toThrow()
  });
});