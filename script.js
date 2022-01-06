"use strict";

const container = document.getElementById("container");
const btnChoose = document.querySelector(".choose");
const btnErase = document.querySelector(".erase");
const btnColor = document.querySelector(".color");
const btnClear = document.querySelector(".clear");

const random = () => Math.floor(Math.random() * 255);

let isColor = true;

const clearAll = function () {
  isColor = true;
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => (item.style.backgroundColor = "white"));
  randomColor();
};

const erase = function () {
  if (isColor) {
    this.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  } else {
    this.style.backgroundColor = `rgb(255, 255, 255)`;
  }
};

// СОЗДАНИЕ ГРИДА

function makeRows(rows = 16, cols = 16) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}
makeRows();

// РАНДОМНЫЙ ЦВЕТ ПРИ НАВЕДЕНИИ

const randomColor = function () {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => item.addEventListener("mouseover", erase));
};
randomColor();

// ВЫБОР РАЗМЕРА
btnChoose.addEventListener("click", function () {
  document.getElementById("container").textContent = "";
  const choose = parseFloat(prompt("Выбери размер", "16"));
  makeRows(choose, choose);
  randomColor();
});

// ЛАСТИК
btnErase.addEventListener("click", function () {
  isColor = false;
});

// РЕЖИМ ЦВЕТ
btnColor.addEventListener("click", function () {
  isColor = true;
});

// ОЧИСТКА
btnClear.addEventListener("click", clearAll);
