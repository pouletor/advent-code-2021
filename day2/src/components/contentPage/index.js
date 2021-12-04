import styled from "styled-components";
import BtmRightIcon from "../../assets/svg/bg__btm-right.js";
import LeftIcon from "../../assets/svg/bg__left";
import TopRightIcon from "../../assets/svg/bg__top-right.js";

const ContentPage = ({ children }) => {
  const BtmRightIconWrapper = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
  `;
  const LeftIconWrapper = styled.div`
    position: absolute;
    left: 0;
  `;
  const TopRightIconWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 700px) {
      flex-direction: row;
    }
  `;

  return (
    <div>
      <BtmRightIconWrapper>
        <BtmRightIcon />
      </BtmRightIconWrapper>
      <LeftIconWrapper>
        <LeftIcon />
      </LeftIconWrapper>
      <TopRightIconWrapper>
        <TopRightIcon />
      </TopRightIconWrapper>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default ContentPage;
