import styles from "./Header.module.css";

function Header() {
  const wrapper = document.createElement("header");
  const title = document.createElement("h1");
  const subtitle = document.createElement("h2");

  title.className = styles.header__title;
  title.innerHTML = "Advent code: day 3";
  subtitle.className = styles.header__subtitle;
  subtitle.innerHTML = "Keyboard";

  wrapper.appendChild(title);
  wrapper.appendChild(subtitle);

  return wrapper;
}

export default Header;
