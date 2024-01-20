// Import styles
import styled from "styled-components";
// Import components
import { Banner } from "./components/Banner";
import { TextComponent } from "./components/TextComponent";

const Container = styled.div`
  background-color: red;
`;
export const Home = () => {
  return (
    <Container>
      <Banner />
      <TextComponent />
    </Container>
  );
};
