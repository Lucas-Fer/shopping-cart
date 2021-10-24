const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

window.fetch = jest.fn(fetchSimulator);

describe('2 - Teste a função fecthItem', () => {
  fetchItem('MLB1615760527');
  describe('1 - Teste a função fecthProducts', () => {

    it('1 - Teste se fetchProducts é uma função', () => {
      expect((typeof fetchItem)).toBe('function');
    });

    it('2 - Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', () => {

      // codigo com o auxilio de Brunão!
      expect(fetch).toHaveBeenCalled();
    });

    it('3 - Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";"', () => {
      // codigo com o auxilio de Brunão!

      expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
    });

    it('4 - Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
      const result = await fetchItem('MLB1615760527');
      expect(result).toEqual(item);
    });
    it('5 - Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error(mensagem esperada aqui) para comparar com o objeto retornado da API.', async () => {
      try {
        await fetchItem();
      } catch (e) {
        expect(e).toEqual(new Error('You must provide an url'));
      }
    });
  });

});
