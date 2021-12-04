import styled from "styled-components";

const Menu = (props) => {
  const { title = "French Fries with Ketchup", price = "$4.50" } = props;
  const Title = styled.div`
    font-size: 1.8rem;
  `;
  const Price = styled.div`
    font-size: 3.2rem;
    font-weight: bold;
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

  return (
    <div>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Button type="button">Add to Cart</Button>
    </div>
  );
};

export default Menu;
