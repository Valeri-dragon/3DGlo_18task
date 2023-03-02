const animateNum = (nums, elems) => {
  console.log("Здесь смена цфр");
  const time = 1;
  const step = 1;
  let interval;
  let n;
  const outNum = (num, elem) => {
    n = 0;
    let t = Math.round(time / (num / step));
    interval = setInterval(() => {
      n = n + step;
      console.log(`Число n из функции animate ${n}`);
      console.log(`Переданное число ${num}`);
      if (n === num) {
        clearInterval(interval);
      }
      elem.textContent = n;
    }, t);
  };
  outNum(nums, elems);
};
export default animateNum;
