// Import styles
import styled from "styled-components";
import { ITacademySVG } from "../../assets/svg/ITacademySVG";
import { respondTo } from "../../utils/styles/_respondTo";
// Import components
import { Menu } from "./Menu";

// Styles
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
  width: 80%;

  ${respondTo.desktop`
    width: 60%;
  `}

  ${respondTo.tv`
    width: 400px;
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

// Navbar
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
