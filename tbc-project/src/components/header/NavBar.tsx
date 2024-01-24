// import styles
import styled from "styled-components";
import { ITacademySVG } from "../../assets/svg/ITacademySVG";
import { respondTo } from "../../utils/styles/_respondTo";
// import components
import { Menu } from "./Menu";

// styles
const NavContainer = styled.div`
  margin: 0;
  outline: 0;
  padding: 0;
  height: 84px;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  background-color: rgb(26, 30, 31);
  box-shadow: var(--shd, 0 0 5px rgba(0, 0, 0, 0.5));

  ${respondTo.mobile`
        height:69px;
    `}
  ${respondTo.smallTablet`
        height:69px;
    `}
`;

const Container = styled.div`
  margin: 0;
  outline: 0;
  padding: 0;
  z-index: 1000;

  height: 84px;
  width: 100vw;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  background-color: rgba(34, 34, 34, 0.95);
  box-shadow: var(--shd, 0 0 5px rgba(0, 0, 0, 0.5));

  ${respondTo.mobile`
        height:69px;
        position:static;
    `}
  ${respondTo.smallTablet`
        height:69px;
        position:static;
    `}
`;

const InnerContainer = styled.div`
  width: 90%;

  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
  display: flex;
  align-items: center;

  svg {
    height: 12rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

// export navbar
export const NavBar = () => {
  return (
    <NavContainer>
      <Container>
        <InnerContainer>
          <ITacademySVG />
          <Menu />
        </InnerContainer>
      </Container>
    </NavContainer>
  );
};
