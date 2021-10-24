const getSavedCartItems = () => {
  const getKey = (localStorage.getItem('cartItems'));
  return getKey;
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
