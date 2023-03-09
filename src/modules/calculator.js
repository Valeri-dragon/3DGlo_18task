import { animate } from "./helpers";
const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  let str;
  let span = document.createElement("span");

  const error = (e, str) => {
    span.style.display = "block";
    span.classList.add("error");
    span.style.color = "red";
    span.style.position = `absolute`;
    span.style.top = `0px`;
    span.style.right = `77px`;
    span.style.padding = `5px`;
    span.style.background = `#fff`;
    span.textContent = str;
    e.before(span);
  };
  const removeError = () => {
    str = "";
    span.remove();
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalPrice = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5 && calcDay.value >= 1) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10 && calcDay.value >= 5) {
      calcDayValue = 1.5;
    }
    if (calcType.value && calcSquare.value) {
      totalPrice =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalPrice = 0;
    }

    animate({
      duration: 1000,
      timing(x, timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.round(totalPrice * progress);
      },
    });
  };

  const validate = (e) => {
    calcBlock.addEventListener("input", (ev) => {
     
      ev.target.value = ev.target.value.trim();
      if (ev.target === calcSquare && ev.target.value === "0") {
        ev.target.value = ev.target.value.replace(/\D+/, "");
        str = "Введите число больше 0";
        ev.target.value = "";
        ev.placeholder;
        error(e, str);
      } else if (/\D+/.test(ev.target.value) && ev.target !== calcType) {
        ev.target.value = ev.target.value.replace(/\D+/, "");
      } else if (calcType && calcType.value === "") {
        str = "Нужен объект";
        error(e, str);
      } else if (calcSquare && calcSquare.value === "") {
        str = "Укажите общую площадь";
        error(e, str);
      } else {
        removeError();
        
      }
      countCalc();
    });
  };

 validate(calcBlock);
};
export default calculator;
