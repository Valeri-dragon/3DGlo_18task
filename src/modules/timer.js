const timer = (deadline) => {
  const timer = document.getElementById("timer");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let timerDays = document.createElement("p");
  let idInterval;
  const getTimeRemaining = () => {
    let dateNow = new Date().getTime();
    let dateStop = Date.parse(deadline);
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    const addZero = (n) => (n < 10 ? "0" + n : n);
    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);
    timerDays.setAttribute("id", "timer-days");
    timerDays.textContent = `${addZero(getTime.days)} Дн.`;
    if (getTime.days == 0) {
      timerDays.textContent = "";
    }
    timer.prepend(timerDays);

    if (getTime.timeRemaining <= 0) {
      timerDays.textContent = `0 Дн.`;
      timerHours.textContent = addZero(0);
      timerMinutes.textContent = addZero(0);
      timerSeconds.textContent = addZero(0);
      clearInterval(idInterval);
    }
  };
  if (deadline) {
    idInterval = setInterval(updateClock, 1000);
  }
};
export default timer;
