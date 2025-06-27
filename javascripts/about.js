document.addEventListener("DOMContentLoaded", () => {
  showBurgerMenu();
});
// ТЕЛЕФОН

function showBurgerMenu() {
  const burger = document.querySelector("#burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
}
