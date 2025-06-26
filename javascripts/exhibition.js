document.addEventListener("DOMContentLoaded", () => {
  openModalFour();
  openModalThree();
  openModalTwo();
  openModal();
  AfterPurchase();
  AfterPurchase2();
  AfterPurchase3();
  AfterPurchase4();
  getTicket();
  // updateDisplay();
  showBurgerMenu();
  getTicket2();
  getTicket3();
  getTicket4();
});
// окно регистрации
function openModal() {
  let button = document.querySelector(".exp-page-tobuy");
  let modal = document.querySelector("#register");
  const overlay = document.querySelector(".overlay");

  // button.addEventListener("click", () => {
  //   modal.style.cssText = "display: flex";
  // });

  if (button && modal && overlay) {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
      overlay.style.display = "block";
    });

    // Закрытие по клику на оверлей
    overlay.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  } else {
    console.warn("Не найдены элементы для модального окна");
  }
}
function openModalTwo() {
  let button = document.querySelector(".exp-page-tobuy-2");
  let modal = document.querySelector("#register-2");
  const overlay = document.querySelector(".overlay");

  // button.addEventListener("click", () => {
  //   modal.style.cssText = "display: flex";
  // });

  if (button && modal && overlay) {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
      overlay.style.display = "block";
    });

    // Закрытие по клику на оверлей
    overlay.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  } else {
    console.warn("Не найдены элементы для модального окна");
  }
}
function openModalThree() {
  let button = document.querySelector(".exp-page-tobuy-3");
  let modal = document.querySelector("#register-3");
  const overlay = document.querySelector(".overlay");

  // button.addEventListener("click", () => {
  //   modal.style.cssText = "display: flex";
  // });

  if (button && modal && overlay) {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
      overlay.style.display = "block";
    });

    // Закрытие по клику на оверлей
    overlay.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  } else {
    console.warn("Не найдены элементы для модального окна");
  }
}
function openModalFour() {
  let button = document.querySelector(".exp-page-tobuy-4");
  let modal = document.querySelector("#register-4");
  const overlay = document.querySelector(".overlay");

  if (button && modal && overlay) {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
      overlay.style.display = "block";
    });

    // Закрытие по клику на оверлей
    overlay.addEventListener("click", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
  } else {
    console.warn("Не найдены элементы для модального окна");
  }
}

function AfterPurchase() {
  document.getElementById("submitBtn").addEventListener("click", function () {
    alert(
      "Благодарим за покупку! Дальнейшая форма оплаты направлена вам на почту!"
    );
    const modal = document.querySelector(".modal");

    modal.style.display = "none";
  });
}
function AfterPurchase2() {
  document.getElementById("submitBtn2").addEventListener("click", function () {
    alert(
      "Благодарим за покупку! Дальнейшая форма оплаты направлена вам на почту!"
    );
    const modal = document.querySelector(".modal2");

    modal.style.display = "none";
  });
}
function AfterPurchase3() {
  document.getElementById("submitBtn3").addEventListener("click", function () {
    alert(
      "Благодарим за покупку! Дальнейшая форма оплаты направлена вам на почту!"
    );
    const modal = document.querySelector(".modal3");

    modal.style.display = "none";
  });
}
function AfterPurchase4() {
  document.getElementById("submitBtn4").addEventListener("click", function () {
    alert(
      "Благодарим за покупку! Дальнейшая форма оплаты направлена вам на почту!"
    );
    const modal = document.querySelector(".modal4");

    modal.style.display = "none";
  });
}
// для первого
function getTicket() {
  let count = 1;
  const pricePerTicket = 500;

  const countDisplay = document.getElementById("count");
  const totalDisplay = document.getElementById("total");

  document.getElementById("plus").addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  document.getElementById("minus").addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateDisplay();
    }
  });

  function updateDisplay() {
    countDisplay.textContent = count;
    totalDisplay.textContent = count * pricePerTicket;
  }
}
// для второго
function getTicket2() {
  let count = 1;
  const pricePerTicket = 500;

  const countDisplay = document.getElementById("count2");
  const totalDisplay = document.getElementById("total2");

  document.getElementById("plus2").addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  document.getElementById("minus2").addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateDisplay();
    }
  });

  function updateDisplay() {
    countDisplay.textContent = count;
    totalDisplay.textContent = count * pricePerTicket;
  }
}
// для третьего
function getTicket3() {
  let count = 1;
  const pricePerTicket = 500;

  const countDisplay = document.getElementById("count3");
  const totalDisplay = document.getElementById("total3");

  document.getElementById("plus3").addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  document.getElementById("minus3").addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateDisplay();
    }
  });

  function updateDisplay() {
    countDisplay.textContent = count;
    totalDisplay.textContent = count * pricePerTicket;
  }
}
// для четвертого
function getTicket4() {
  let count = 1;
  const pricePerTicket = 500;

  const countDisplay = document.getElementById("count4");
  const totalDisplay = document.getElementById("total4");

  document.getElementById("plus4").addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  document.getElementById("minus4").addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateDisplay();
    }
  });

  function updateDisplay() {
    countDisplay.textContent = count;
    totalDisplay.textContent = count * pricePerTicket;
  }
}
// ТЕЛЕФОН

function showBurgerMenu() {
  const burger = document.querySelector("#burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
}
