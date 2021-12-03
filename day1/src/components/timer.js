const DEFAULT_TIMER = 15 * 60 * 1000; // 15m into ms
const DECOUNT_TIME = 1 * 1000; // 1s into ms
let timer = new Date(DEFAULT_TIMER);

const minSelector = document.querySelector("[data-minutes]");
const secSelector = document.querySelector("[data-seconds]");
const buttonSelector = document.querySelector("[data-button]");
const wrapperSelector = document.querySelector("[data-timer]");
const settingSelector = document.querySelector("[data-settings]");

const START = buttonSelector.dataset.start;
const STOP = buttonSelector.dataset.stop;

let intervalId;

const countDown = () => {
  if (timer > 0) {
    timer = timer - DECOUNT_TIME;
    const time = new Date(timer);
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    minSelector.value = minutes;
    secSelector.value = seconds;
  }

  if (timer === 0) {
    updateStateTimer("finished");
  }
};

const updateWording = (wording) => {
  buttonSelector.dataset.state = wording;
  buttonSelector.textContent = wording;
};

const setInputDisabled = (boolean) => {
  minSelector.disabled = boolean;
  secSelector.disabled = boolean;
};

const startTimer = () => {
  updateWording(STOP);

  if (!intervalId) {
    intervalId = setInterval(countDown, DECOUNT_TIME);
  }
};

const stopTimer = () => {
  updateWording(START);

  clearInterval(intervalId);
  intervalId = null;
};

const updateTimer = () => {
  const isEditable = wrapperSelector.dataset.timer === "editable";
  if (isEditable) {
    const minutes = Number(minSelector.value) * 60 * 1000;
    const seconds = Number(secSelector.value) * 1000;
    timer = new Date(minutes + seconds);

    updateStateTimer("");
  }
};

const updateStateTimer = (state) => {
  wrapperSelector.dataset.timer = state;
};

buttonSelector.addEventListener("click", () => {
  const state = buttonSelector.dataset.state;
  setInputDisabled(true);

  if (state === STOP) {
    stopTimer();
  } else {
    updateTimer();
    startTimer();
  }
});

settingSelector.addEventListener("click", () => {
  const isFinished = wrapperSelector.dataset.timer === "finished";
  if (!isFinished) {
    updateStateTimer("editable");
    stopTimer();
    setInputDisabled(false);
  }
});
