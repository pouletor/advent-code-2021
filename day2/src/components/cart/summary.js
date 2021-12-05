import styled from "styled-components";

const Wrapper = styled.div`
  text-align: right;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Element = styled.li`
  margin-top: 1rem;
  display: flex;
  justify-content: right;
  align-items: baseline;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  width: 13rem;
`;
const SubTotal = styled(Value)``;
const Tax = styled(Value)``;
const Total = styled(Value)`
  color: var(--purpleColor);
`;

const TAX = 0.0975;

const Summary = ({ subTotal = 0 }) => {
  const calculatedTax = (subTotal * TAX).toFixed(2);
  const total = subTotal + calculatedTax;
  return (
    <Wrapper>
      <List>
        <Element>
          <Title>Subtotal:</Title>
          <SubTotal>{subTotal}</SubTotal>
        </Element>
        <Element>
          <Title>Tax:</Title>
          <Tax>${calculatedTax}</Tax>
        </Element>
        <Element>
          <Title>Total:</Title>
          <Total>${total}</Total>
        </Element>
      </List>
    </Wrapper>
  );
};

export default Summary;
