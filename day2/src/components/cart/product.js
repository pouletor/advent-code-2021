import styled from "styled-components";
import Chevron from "../../assets/svg/chevron.svg";

const Wrapper = styled.div`
  display: flex;
`;
const Picture = styled.div`
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  flex-shrink: 0;
`;
const PictureQuantity = styled.span`
  position: absolute;
  background-color: var(--blackColor);
  color: var(--whiteColor);
  font-weight: bold;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translate(-50%, -50%);
`;
const RightContent = styled.div`
  margin-left: 2rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
`;
const Price = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Update = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button.attrs(() => ({
  type: "button",
}))`
  font-size: 1.6rem;
  font-weight: bold;
  height: 3.2rem;
  width: 3.2rem;
  background-color: var(--purpleColor);
  color: var(--whiteColor);
  border-radius: 2rem;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--purpleHoverColor);
  }

  &:active {
    background-color: var(--purpleActiveColor);
  }

  &:focus {
    border-color: var(--borderColor);
  }
`;
const Decrease = styled(Button)``;
const Increase = styled(Button)`
  transform: rotate(180deg);
`;
const Quantity = styled.div`
  font-weight: bold;
`;
const Total = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  margin-left: auto;
`;

const Product = ({
  title = "French fries hum with Keychuyp",
  price = "$4,44",
  imgUrl = "../../assets/products/plate__bacon-eggs.png",
  currency,
  quantity = 2,
}) => {
  return (
    <Wrapper>
      <Picture>
        <img src={imgUrl} alt="" />
        <PictureQuantity>{quantity}</PictureQuantity>
      </Picture>
      <RightContent>
        <Title>{title}</Title>
        <Price>
          {currency}
          {price}
        </Price>
        <QuantityWrapper>
          <Update>
            <Decrease>
              <Chevron />
            </Decrease>
            <Quantity>{quantity}</Quantity>
            <Increase>
              <Chevron />
            </Increase>
          </Update>
          <Total>$13,54</Total>
        </QuantityWrapper>
      </RightContent>
    </Wrapper>
  );
};

export default Product;
