const fetchProducts = (query) =>
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json())
    .catch((erro) => (erro));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
