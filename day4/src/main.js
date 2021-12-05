import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    day: "day 4",
  },
});

export default app;
