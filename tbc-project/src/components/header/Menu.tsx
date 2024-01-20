// Import styles
import styled from "styled-components";
import { MenuSVG } from "../../assets/svg/MenuSVG";
// Import hooks
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../../utils/hooks/useWindowDimensions";
// Import components
import { SideBar } from "./SideBar";

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: auto;
  svg {
    width: 3rem;
    height: 3rem;
    position: absolute;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  .active {
    color: rgb(0, 163, 224);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(244, 244, 244);
  padding: 0 20px 0 20px;
  transition: var(--trans, color 0.4s ease 0s);
  &:hover {
    color: rgb(0, 163, 224);
  }
`;

// Menu
export const Menu = () => {
  // Get window dimensions
  const { width } = useWindowDimensions();
  // Get windows location
  const location = useLocation();
  // Hook for opening&closing sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      {width > 800 ? (
        <InnerContainer>
          <Link href="#">მთავარი</Link>
          <Link href="#">TBC IT</Link>
          <Link href="/" className={location.pathname === "/" ? "active" : ""}>
            TBC x USAID
          </Link>
          <Link href="#">რისკები</Link>
        </InnerContainer>
      ) : (
        <>
          <MenuSVG toggle={toggle} />
          {isOpen && <SideBar toggle={toggle} />}
        </>
      )}
    </Container>
  );
};
