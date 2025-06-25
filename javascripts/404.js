document.addEventListener("DOMContentLoaded", () => {
  draggable();
  draggableTwo();
  draggableThree();
  draggableFour();
  draggableFive();
  draggableSix();
  draggableSeven();
  draggableEight();
  draggableNine();
  draggableTen();
  draggableEleven();
});
function draggable() {
  dragElement(document.getElementById("a1"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableTwo() {
  dragElement(document.getElementById("a2"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableThree() {
  dragElement(document.getElementById("a3"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableFour() {
  dragElement(document.getElementById("a4"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableFive() {
  dragElement(document.getElementById("a5"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableSix() {
  dragElement(document.getElementById("a6"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableSeven() {
  dragElement(document.getElementById("a7"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableEight() {
  dragElement(document.getElementById("a8"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableNine() {
  dragElement(document.getElementById("a9"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableTen() {
  dragElement(document.getElementById("a10"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggableEleven() {
  dragElement(document.getElementById("a11"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      // header — то через что (откуда) мы перемещаем див
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // в противном случае переместить див из любого места внутри див
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //  получить позицию мышки при запуске
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // вызвать функцию когда двигается курсор
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      // посчитать новую позицию курсорса
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // конвертация пикселей во vw
      const viewportWidth = window.innerWidth; // Получить текущую ширину области просмотра
      const deltaX = (pos1 / viewportWidth) * 100; // Рассчитать горизонтальное изменение vw
      const deltaY = (pos2 / viewportWidth) * 100; // Рассчитать вертикальное изменение vw

      //  Обновляем позицию элемента, используя  vw
      const currentTop = parseFloat(elmnt.style.top || 0); // Получить текущее верхнее значение в vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Получить текущее левое значение в vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
