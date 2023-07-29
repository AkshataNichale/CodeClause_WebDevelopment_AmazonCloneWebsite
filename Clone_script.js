const cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
}

function openCart() {
  const modal = document.getElementById('cart-modal');
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsList.appendChild(li);
  });

  modal.style.display = 'block';
}

function closeCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none';
}

function checkout() {
  alert('Thank you for your purchase!');
  cartItems.length = 0;
  closeCart();
}
