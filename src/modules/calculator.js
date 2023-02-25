const calculator = () => {
  const calcItem = document.querySelectorAll(".calc-item~input");

  const validate = (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  };
  calcItem.forEach((item) => {
    item.addEventListener("input", (e) => {
      validate(e);
    });
  });
};
export default calculator;
