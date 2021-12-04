import { createGlobalStyle, StyleSheetManager } from "styled-components";

import Header from "./header";
import ContentPage from "./contentPage";
import Card from "./card";
import Menu from "./menu";

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
`;

const App = () => (
  <StyleSheetManager disableVendorPrefixes>
    <div id="app">
      <GlobalStyle />
      <Header />
      <ContentPage>
        <Card title="To Go Menu">
          <Menu />
        </Card>
        <Card title="Your Cart">
          <div>YOo</div>
        </Card>
      </ContentPage>
    </div>
  </StyleSheetManager>
);

export default App;
