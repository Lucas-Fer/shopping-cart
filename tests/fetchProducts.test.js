const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

window.fetch = jest.fn(fetchSimulator);

describe('1 - Teste a função fecthProducts', () => {
  fetchProducts('computador');
  it('1 - Teste se fetchProducts é uma função', () => {
    expect((typeof fetchProducts)).toBe('function');
  });

  it('2 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', () => {

    // codigo com o auxilio de Brunão!
    expect(fetch).toHaveBeenCalled();
  });

  it('3 - Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', () => {
    // codigo com o auxilio de Brunão!

    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });

  it('4 - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
  it('5 - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.Dica: Lembre - se de usar o new Error(mensagem esperada aqui) para comparar com o objeto retornado da API.', async () => {
    try {
      await fetchProducts();
    } catch (e) {
      expect(e).toEqual(new Error('You must provide an url'));
    }
  });
});
