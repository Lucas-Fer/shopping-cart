const saveCartItems = (arrayItens) => {
  // const odinPaiDeTodos = document.querySelector('.cart__items');
  // const thor = odinPaiDeTodos.childNodes;

  // const arrei = [];
  // for (let i = 0; i < thor.length; i += 1) {
  //   arrei.push(thor[i].innerText);s
  // }
  localStorage.setItem('cartItems', arrayItens);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
