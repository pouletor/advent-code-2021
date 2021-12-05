import Card from "./card";
import MenuList from "./menu";
import Cart from "./cart";

const MainPage = () => (
  <>
    <Card title="To Go Menu">
      <MenuList />
    </Card>
    <Card title="Your Cart">
      <Cart />
    </Card>
  </>
);

export default MainPage;
