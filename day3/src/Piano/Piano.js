import styles from "./Piano.module.css";
import PianoSvg from "../assets/svg/piano.svg";

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

  const handleToggleClass = (element) => () => {
    element.classList.toggle(styles["piano__key--clicked"]);
  };

  const handleRemoveClass = (element) => () => {
    element.classList.remove(styles["piano__key--clicked"]);
  };

  const handleEnterPress = (element) => (event) => {
    if (event.key === "Enter") {
      handleToggleClass(element)();
    } else {
      // prevent bug when smashing Enter and Tab simutaneously
      handleRemoveClass(element)();
    }
  };

  const keys = wrapper.querySelectorAll("path");
  keys.forEach((key) => {
    key.addEventListener("mousedown", handleToggleClass(key));
    key.addEventListener("mouseup", handleToggleClass(key));
    key.addEventListener("keydown", handleEnterPress(key));
    key.addEventListener("keyup", handleEnterPress(key));
  });

  return wrapper;
}

export default Piano;
