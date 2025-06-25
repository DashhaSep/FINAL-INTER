document.addEventListener("DOMContentLoaded", () => {
  ShopKorzina();
});

function ShopKorzina() {
  const cart = [];
  const cartItemsContainer = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("total");
  const cartModal = document.getElementById("cartModal");
  const cartIconWrapper = document.getElementById("cartIconWrapper");
  const closeCart = document.getElementById("closeCart");
  const cartBadge = document.getElementById("cartBadge");

  // Показать корзину
  cartIconWrapper.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  // Закрыть корзину
  closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Закрыть по клику вне окна
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none";
    }
  });

  // Обновление корзины
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.textContent = `${item.name} — ${item.price} ₽`;
      cartItemsContainer.appendChild(div);
      total += item.price;
    });

    totalDisplay.textContent = total;

    // Обновить бейдж
    if (cart.length > 0) {
      cartBadge.style.display = "block";
      cartBadge.textContent = cart.length;
    } else {
      cartBadge.style.display = "none";
    }
  }

  // Добавление товаров
  document.querySelectorAll(".product").forEach((product) => {
    product.addEventListener("click", () => {
      const name = product.getAttribute("data-name");
      const price = parseInt(product.getAttribute("data-price"));
      cart.push({ name, price });
      updateCart();
    });
  });
}
