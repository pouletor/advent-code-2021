import "./style.css";
import Header from "./Header/Header";
import Piano from "./Piano/Piano";

async function getComponent() {
  const wrapper = document.createElement("div");
  wrapper.id = "app";

  wrapper.appendChild(Header());
  wrapper.appendChild(Piano());

  return wrapper;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
