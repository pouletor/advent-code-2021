import styles from "./Piano.module.css";
import PianoSvg from "../assets/svg/piano.svg";

// https://stackoverflow.com/questions/29421409/how-to-load-all-files-in-a-directory-using-webpack-without-require-statements/30652110#30652110 and https://medium.com/dailyjs/leveraging-webpack-power-to-import-all-files-from-one-folder-cddedd3201b3
function requireAll(r) {
  return r.keys().map(r);
}

const EVENT = {
  MOUSEDOWN: "mousedown",
  MOUSEUP: "mouseup",
  KEYDOWN: "keydown",
  KEYUP: "keyup",
};

function Piano() {
  const wrapper = document.createElement("div");
  wrapper.className = styles.piano;
  wrapper.innerHTML = PianoSvg;

  const whiteKeys = wrapper.querySelectorAll(".white-keys");
  whiteKeys.forEach((key) => {
    key.classList.add(styles["white-keys"]);
  });

  const blackKeys = wrapper.querySelectorAll(".black-keys");
  blackKeys.forEach((key) => {
    key.classList.add(styles["black-keys"]);
  });

  const audiosFile = requireAll(
    require.context("../assets/audio/", true, /.mp3$/)
  );

  const addClass = (element) => {
    element.classList.add(styles["piano__key--clicked"]);
  };

  const removeClass = (element) => {
    element.classList.remove(styles["piano__key--clicked"]);
  };

  const audiosArray = [];
  audiosFile.forEach((file) => {
    const audioObj = new Audio(file);
    audioObj.loop = true;
    audiosArray.push(audioObj);
  });

  const playAudioFile = (element) => {
    const index = element.id;
    addClass(element);
    if (audiosArray[index].readyState >= 2) {
      audiosArray[index].play();
    }
  };

  const pauseAudioFile = (element) => {
    const index = element.id;
    removeClass(element);
    audiosArray[index].pause();
  };

  const handleMouseEvent = (element) => (event) => {
    if (event.type === EVENT.MOUSEDOWN) {
      playAudioFile(element);
    }
    if (event.type === EVENT.MOUSEUP) {
      pauseAudioFile(element);
    }
  };

  const handleKeyEvent = (element) => (event) => {
    if (event.key === "Enter") {
      if (event.type === EVENT.KEYDOWN) {
        playAudioFile(element);
      }
      if (event.type === EVENT.KEYUP) {
        pauseAudioFile(element);
      }
    } else {
      // prevent bug when smashing Enter and Tab simutaneously
      pauseAudioFile(element);
    }
  };

  const keys = wrapper.querySelectorAll("path");
  keys.forEach((key, index) => {
    key.setAttribute("id", index);
    key.addEventListener(EVENT.MOUSEDOWN, handleMouseEvent(key));
    key.addEventListener(EVENT.MOUSEUP, handleMouseEvent(key));
    key.addEventListener(EVENT.KEYDOWN, handleKeyEvent(key));
    key.addEventListener(EVENT.KEYUP, handleKeyEvent(key));
  });

  return wrapper;
}

export default Piano;
