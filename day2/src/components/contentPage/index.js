import styled from "styled-components";
import BtmRightIcon from "../../assets/svg/bg__btm-right.svg";
import LeftIcon from "../../assets/svg/bg__left.svg";
import TopRightIcon from "../../assets/svg/bg__top-right.svg";

const BtmRightIconComponent = styled(BtmRightIcon)`
  position: absolute;
  top: 100%;
  right: 0;
`;
const LeftIconComponent = styled(LeftIcon)`
  position: absolute;
  left: 0;
`;
const TopRightIconComponent = styled(TopRightIcon)`
  position: absolute;
  top: 0;
  right: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const ContentPage = ({ children }) => (
  <div>
    <BtmRightIconComponent />
    <LeftIconComponent />
    <TopRightIconComponent />
    <Wrapper>{children}</Wrapper>
  </div>
);

export default ContentPage;
