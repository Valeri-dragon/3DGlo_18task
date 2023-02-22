const timer = (deadline) => {
  const l = (log) => {
    console.log(log);
  };
  const timer = document.getElementById("timer");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let timerDays = document.createElement("p");

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
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    timerDays.setAttribute("id", "timer-days");
    timerDays.textContent = `${getTime.days} Дн.`;
    timer.prepend(timerDays);
    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  };

  updateClock();
};
export default timer;
