import { Router } from "preact-router";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import ContentPage from "./contentPage";

const GlobalStyle = createGlobalStyle`
	html,
	body {
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		font-family: "Poppins", sans-serif;
		background-color: var(--bgColor);
		color: var(--blackColor);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	};
	* {
		box-sizing: border-box;
	};
	html {
		--bgColor: #EFF0F6;
		--borderColor: #d7d6fc;
		--purpleColor: #6B00F5;
		--blueColor: #e1f0fe;
		--lightColor: #f7f7ff;
		--greenColor: #defef0;
		--whiteColor: #ffffff;
		--blackColor: #000000;

		font-size: 62.5%;
	};
	body {
		font-size: 1.8rem;
	};
`;

const App = () => (
  <div id="app">
    <GlobalStyle />
    <Header />
    <ContentPage />
  </div>
);

export default App;
