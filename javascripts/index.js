console.log("slay");
document.addEventListener("DOMContentLoaded", () => {
  // draggable();
  // draggableTwo();
  // draggableThree();
  // draggableFour();
  // draggableFive();
  // draggableSix();
  // draggableSeven();
  // draggableEight();
  // draggableNine();
  // draggableTen();
  // draggableEleven();
  // AfterPurchase();
  Wrappers();
  ArchiveBackgroundMainPage();
  ReadMoreMainPage();
  openModalFour();
  openModalThree();
  openModalTwo();
  openModal();
  // ShopKorzina();

  // функции телефон
  showBurgerMenu();

  // функция для набора билетов
  let count = 1;
  const pricePerTicket = 500;

  const countDisplay = document.getElementById("count");
  const totalDisplay = document.getElementById("total");

  function updateDisplay() {
    countDisplay.textContent = count;
    totalDisplay.textContent = count * pricePerTicket;
  }

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

  // начальное обновление (если нужно)
  updateDisplay();
});

// function draggable() {
//   dragElement(document.getElementById("a1"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableTwo() {
//   dragElement(document.getElementById("a2"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableThree() {
//   dragElement(document.getElementById("a3"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableFour() {
//   dragElement(document.getElementById("a4"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableFive() {
//   dragElement(document.getElementById("a5"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableSix() {
//   dragElement(document.getElementById("a6"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableSeven() {
//   dragElement(document.getElementById("a7"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableEight() {
//   dragElement(document.getElementById("a8"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableNine() {
//   dragElement(document.getElementById("a9"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableTen() {
//   dragElement(document.getElementById("a10"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
// function draggableEleven() {
//   dragElement(document.getElementById("a11"));

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;

//     if (document.getElementById(elmnt.id + "header")) {
//       // header — то через что (откуда) мы перемещаем див
//       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//       // в противном случае переместить див из любого места внутри див
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       //  получить позицию мышки при запуске
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // вызвать функцию когда двигается курсор
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();

//       // посчитать новую позицию курсорса
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;

//       // конвертация пикселей во vw
//       const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
//       const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
//       const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

//       //  Обновляем позицию элемента, используя  vw
//       const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
//       const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

//       elmnt.style.top = `${currentTop - deltaY}vw`;
//       elmnt.style.left = `${currentLeft - deltaX}vw`;
//     }

//     function closeDragElement() {
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
// }
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
  });
}
// function ShopKorzina() {
//   const cart = [];
//   const cartItemsContainer = document.getElementById("cartItems");
//   const totalDisplay = document.getElementById("total");
//   const cartModal = document.getElementById("cartModal");
//   const cartIconWrapper = document.getElementById("cartIconWrapper");
//   const closeCart = document.getElementById("closeCart");
//   const cartBadge = document.getElementById("cartBadge");

//   // Показать корзину
//   cartIconWrapper.addEventListener("click", () => {
//     cartModal.style.display = "flex";
//   });

//   // Закрыть корзину
//   closeCart.addEventListener("click", () => {
//     cartModal.style.display = "none";
//   });

//   // Закрыть по клику вне окна
//   cartModal.addEventListener("click", (e) => {
//     if (e.target === cartModal) {
//       cartModal.style.display = "none";
//     }
//   });

//   // Обновление корзины
//   function updateCart() {
//     cartItemsContainer.innerHTML = "";
//     let total = 0;

//     cart.forEach((item) => {
//       const div = document.createElement("div");
//       div.className = "cart-item";
//       div.textContent = `${item.name} — ${item.price} ₽`;
//       cartItemsContainer.appendChild(div);
//       total += item.price;
//     });

//     totalDisplay.textContent = total;

//     // Обновить бейдж
//     if (cart.length > 0) {
//       cartBadge.style.display = "block";
//       cartBadge.textContent = cart.length;
//     } else {
//       cartBadge.style.display = "none";
//     }
//   }

//   // Добавление товаров
//   document.querySelectorAll(".product").forEach((product) => {
//     product.addEventListener("click", () => {
//       const name = product.getAttribute("data-name");
//       const price = parseInt(product.getAttribute("data-price"));
//       cart.push({ name, price });
//       updateCart();
//     });
//   });
// }

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
