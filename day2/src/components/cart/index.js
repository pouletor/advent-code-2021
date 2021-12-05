import styled from "styled-components";
import Product from "./product";
import Summary from "./summary";

const Wrapper = styled.div`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;

const ProductWrapper = styled.div`
  > div:not(:first-child) {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--borderColor);
  }

  > div:last-child {
    padding-bottom: 2rem;
    border-bottom: 5px solid var(--borderColor);
  }
`;

const EmptyCart = () => <>Your cart is empty.</>;

const Cart = () => {
  return (
    <Wrapper>
      {/* <EmptyCart /> */}
      <ProductWrapper>
        <Product />
        <Product />
        <Product />
      </ProductWrapper>
      <Summary />
    </Wrapper>
  );
};

export default Cart;
