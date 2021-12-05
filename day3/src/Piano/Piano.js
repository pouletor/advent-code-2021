import styles from "./Piano.module.css";
import PianoSvg from "../assets/svg/piano.svg";

function Piano() {
  const wrapper = document.createElement("div");
  wrapper.className = styles.piano;
  wrapper.innerHTML = PianoSvg;

  return wrapper;
}

export default Piano;
