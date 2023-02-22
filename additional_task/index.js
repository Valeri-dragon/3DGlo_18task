"use strict";
const l = (lo) => {
  console.log(lo);
};
const bodyEl = document.getElementById("date");
const dayArr = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let date = new Date(); //.getTime();
let dateNow = new Date().getTime();
let dateStop = Date.parse("31 december 2023");
let timeRemaining = (dateStop - dateNow) / 1000;
let daysNewYear = Math.floor(timeRemaining / 60 / 60 / 24);
let getDay = date.getDay();
let getHours = date.getHours();
let time = date.toLocaleTimeString("en");
let day;
let greeting;
dayArr.forEach((item, index) => {
  index = index + 1;
  if (index === getDay) {
    day = item;
  }
});
switch (true) {
  case getHours >= 5 && getHours <= 12:
    greeting = "Доброе утро";
    break;
  case getHours > 12 && getHours <= 17:
    greeting = "Добрый день";
    break;
  case getHours > 17 && getHours <= 22:
    greeting = "Добрый вечер";
    break;
  case getHours > 22 && getHours < 5:
    greeting = "Доброй ночи";
}

bodyEl.insertAdjacentHTML(
  "beforeend",
  `
<p>${greeting}</p>
<p>Сегодня: ${day}</p>
<p>Текущее время: ${time}</p>
<p>До Новго года осталось: ${daysNewYear} д.</p>`
);