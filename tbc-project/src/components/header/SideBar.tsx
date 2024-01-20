// Import styles
import styled from "styled-components";
import { CloseSVG } from "../../assets/CloseSVG";
// Import hooks
import { useLocation } from "react-router-dom";

interface SidebarProps {
  toggle: () => void;
}

// Styles
const Container = styled.div`
  top: 0;
  right: 0;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;

  background-color: rgb(29, 33, 34);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 2rem;

  svg {
    margin: 1rem !important;
    height: 3rem !important;
    display: flex !important;
    position: static !important;
  }
  .active {
    color: rgb(0, 163, 224);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(244, 244, 244);
  padding: 0 20px 0 20px;
  margin: 1rem 0 1rem 0;

  &:active {
    color: rgb(0, 163, 224);
  }
`;

// SideBar
export const SideBar: React.FC<SidebarProps> = ({ toggle }) => {
  // Get windows location
  const location = useLocation();
  return (
    <Container>
      <InnerContainer>
        <InnerContainer>
          <CloseSVG toggle={toggle} />
          <Link href="#">მთავარი</Link>
          <Link href="#">TBC IT</Link>
          <Link href="/" className={location.pathname === "/" ? "active" : ""}>
            TBC x USAID
          </Link>
          <Link href="#">რისკები</Link>
        </InnerContainer>
      </InnerContainer>
    </Container>
  );
};
