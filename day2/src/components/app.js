import { createGlobalStyle, StyleSheetManager } from "styled-components";

import Header from "./header";
import ContentPage from "./contentPage";
import MainPage from "./mainPage";

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
		--purpleHoverColor: rgba(107, 0, 245, 0.8);
		--purpleActiveColor: rgba(107, 0, 245, 0.6);
		--blueColor: #e1f0fe;
		--lightColor: #f7f7ff;
		--greenColor: #defef0;
		--whiteColor: #ffffff;
		--blackColor: #000000;

		--blueProductColor: rgb(122, 179, 243, 0.2);
		--pinkProductColor: rgb(233, 121, 178, 0.2);
		--purpleProductColor: rgb(215, 215, 249, 0.2);
		--greenProductColor: rgb(120, 247, 187, 0.2);

		font-size: 62.5%;
	};
	body {
		font-size: 1.6rem;
	};
	h1, h2 {
		text-align: center;
	}
	h1 {
		margin-bottom: 0;
	}
	img {
		max-width: 100%;
	};
`;

const App = () => (
  <StyleSheetManager disableVendorPrefixes>
    <div id="app">
      <GlobalStyle />
      <Header />
      <ContentPage>
        <MainPage />
      </ContentPage>
    </div>
  </StyleSheetManager>
);

export default App;
