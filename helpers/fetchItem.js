const fetchItem = (ItemID) => fetch(`https://api.mercadolibre.com/items/${ItemID}`)
  .then((response) => response.json())
  .then((value) => value)
  .catch((erro) => (erro));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
