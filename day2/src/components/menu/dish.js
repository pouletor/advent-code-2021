import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;

  &::before {
    border-radius: 2rem;
    content: "";
    background-color: var(${({ color }) => color});
    position: absolute;
    height: calc(100% - 3.5rem);
    width: 100%;
    top: 2rem;
    left: 2rem;
  }
`;
const Picture = styled.div`
  position: relative;
  width: 14.4rem;
  height: 14.4rem;
  flex-shrink: 0;
`;
const RightContent = styled.div`
  position: relative;
  margin-left: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
`;
const Price = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;
const Button = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  height: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  background-color: var(--purpleColor);
  color: var(--whiteColor);
  border-radius: 2rem;
  border-color: transparent;
  margin-top: 0.5rem;

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

const Dish = ({ title, price, imgUrl, currency, color }) => {
  return (
    <Wrapper color={color}>
      <Picture>
        <img src={imgUrl} alt="" />
      </Picture>
      <RightContent>
        <Title>{title}</Title>
        <Price>
          {currency}
          {price}
        </Price>
        <Button type="button">Add to Cart</Button>
      </RightContent>
    </Wrapper>
  );
};

export default Dish;
