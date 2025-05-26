document.addEventListener('DOMContentLoaded', function () {
  const cart = {};

  const addToCartButtons = document.querySelectorAll('.product-card button');
  const viewCartBtn = document.querySelector('.view-cart');
  const cartModal = document.getElementById('cart-modal');
  const cartItemsList = document.getElementById('cart-items');
  const totalPriceEl = document.getElementById('total-price');
  const closeCartBtn = document.getElementById('close-cart');
  const filterBtn = document.getElementById('filterBtn');
  const categorySelect = document.getElementById('category');
  const productCards = document.querySelectorAll('.product-card');

  // Add to cart
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const name = card.querySelector('.product-name').textContent;
      const price = parseFloat(card.querySelector('.product-price').textContent.replace('$', ''));

      if (cart[name]) {
        cart[name].quantity += 1;
      } else {
        cart[name] = { price, quantity: 1 };
      }

      updateCartUI();
    });
  });

  // Show cart modal
  viewCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    updateCartUI();
  });

  // Hide cart modal
  closeCartBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
  });

  // Update cart UI
  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;

    Object.entries(cart).forEach(([name, item]) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;

      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${name}</strong><br>
        $${item.price.toFixed(2)} × ${item.quantity} = $${subtotal.toFixed(2)}
        <br>
        <button class="remove-item" data-name="${name}">Remove</button>
      `;

      cartItemsList.appendChild(li);
    });

    totalPriceEl.textContent = `Total: $${total.toFixed(2)}`;

    // Add event listeners to Remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => {
        const name = button.dataset.name;
        if (cart[name].quantity > 1) {
          cart[name].quantity -= 1;
        } else {
          delete cart[name];
        }
        updateCartUI();
      });
    });
  }

  // Filter products
  filterBtn.addEventListener('click', function () {
    const selectedCategory = categorySelect.value.toLowerCase();

    productCards.forEach(card => {
      const categoryText = card.querySelector('.product-category').textContent.toLowerCase();

      if (selectedCategory === 'all' || categoryText.includes(selectedCategory)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
