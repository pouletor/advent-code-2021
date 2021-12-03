const DEFAULT_TIMER = 15 * 60 * 1000; // 15m into ms
const DECOUNT_TIME = 1000; // 1s into ms
let timer = new Date(DEFAULT_TIMER);

const minSelector = document.querySelector("[data-minutes]");
const secSelector = document.querySelector("[data-seconds]");
const buttonSelector = document.querySelector("[data-button]");
const wrapperSelector = document.querySelector("[data-timer]");
const START = buttonSelector.dataset.start;
const STOP = buttonSelector.dataset.stop;

let intervalId;

const countDown = () => {
  if (timer > 0) {
    timer = timer - 1000;
    const time = new Date(timer);
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    minSelector.textContent = minutes;
    secSelector.textContent = seconds;
  }
  if (timer === 0) {
    wrapperSelector.dataset.timer = "success";
  }
};

const updateWording = (wording) => {
  buttonSelector.dataset.state = wording;
  buttonSelector.textContent = wording;
};

buttonSelector.addEventListener("click", () => {
  const state = buttonSelector.dataset.state;
  if (state === STOP) {
    updateWording(START);

    clearInterval(intervalId);
    intervalId = null;
  } else {
    updateWording(STOP);

    if (!intervalId) {
      intervalId = setInterval(countDown, DECOUNT_TIME);
    }
  }
});
