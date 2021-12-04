import styled from "styled-components";

const Card = ({ title, children }) => {
  const Component = styled.div`
    background-color: var(--whiteColor);
    border-radius: 2.5rem;
    box-shadow: rgba(199, 203, 227, 0.7) 0px 3px 15px 5px;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-bottom: 3rem;

    @media (min-width: 700px) {
      width: 37.5rem;
    }
  `;

  const Title = styled.h2`
    font-size: 3.2rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    text-align: left;
  `;

  return (
    <Component>
      <Title>{title}</Title>
      {children}
    </Component>
  );
};

export default Card;
