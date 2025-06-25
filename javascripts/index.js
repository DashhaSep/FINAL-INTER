console.log("slay");
document.addEventListener("DOMContentLoaded", () => {
  Wrappers();
  ArchiveBackgroundMainPage();
  ReadMoreMainPage();
  // функции телефон
  showBurgerMenu();
});

function Wrappers() {
  const wrappers = document.querySelectorAll(".wrsh-img");

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseenter", () => {
      const active = document.querySelector(".wrsh-img.wrshp-active");

      // Если это уже активная картинка — ничего не делаем
      if (wrapper === active) return;

      // Убираем у активной стили "большой"
      active.classList.remove("wrshp-active");

      // Добавляем стили "большой" к текущей
      wrapper.classList.add("wrshp-active");
    });
  });
}
function ArchiveBackgroundMainPage() {
  const trigger = document.querySelector(".kamen-dop");
  const target = document.querySelector(".black-background-archive");

  // При наведении
  trigger.addEventListener("mouseenter", () => {
    target.classList.add("active");
  });

  // При уходе курсора
  trigger.addEventListener("mouseleave", () => {
    target.classList.remove("active");
  });
}

function ReadMoreMainPage() {
  const trigger = document.querySelector(".descr-readnext-container");
  const target = document.querySelector(".descr-readnext ");

  // При наведении
  trigger.addEventListener("mouseenter", () => {
    target.classList.add("active");
  });

  // При уходе курсора
  trigger.addEventListener("mouseleave", () => {
    target.classList.remove("active");
  });
}

// ТЕЛЕФОН

function showBurgerMenu() {
  const burger = document.querySelector("#burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function updateCartCount() {
  let cart = getCart();

  const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  if (count != 0) {
    document.querySelector(".cart-count").innerHTML = count;
  }
}
