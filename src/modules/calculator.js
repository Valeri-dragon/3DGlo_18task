const calculator = () => {
  const calcItem = document.querySelectorAll(".calc-item~input");
  let str;
  let span = document.createElement("span");

  const removeError = () => {
    span.remove();
  };

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
  const validate = (e) => {
    e.addEventListener("input", (ev) => {
      removeError();

      if (/\D+/.test(ev.target.value.trim())) {
        str = "Введите число";
        error(e, str);
        ev.target.value = ev.target.value.replace(/\D+/, "");
      } else {
        removeError();
        ev.target.value;
      }
    });
  };
  calcItem.forEach((item) => {
    validate(item);
  });
};
export default calculator;
