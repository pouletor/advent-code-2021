// import styled from "styled-components";
import Dish from "./dish";
import mockedProducts from "./mockedProducts.json";

const COLORS = [
  "--blueProductColor",
  "--pinkProductColor",
  "--purpleProductColor",
  "--greenProductColor",
];
const MenuList = () => {
  // dirty duplicate :D
  if (mockedProducts.length > COLORS.length) {
    COLORS.push(...COLORS);
  }

  return (
    <div>
      {mockedProducts.map(({ title, currency, price, imgUrl }, index) => (
        <Dish
          title={title}
          currency={currency}
          price={price}
          imgUrl={imgUrl}
          color={COLORS[index]}
        />
      ))}
    </div>
  );
};

export default MenuList;
