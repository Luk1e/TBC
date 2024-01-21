// import styles
import styled from "styled-components";
// import components
import { Banner } from "./components/Banner";
import { Courses } from "./components/Courses";
import { TextComponent } from "./components/TextComponent";

const Container = styled.div`
  background-color: red;
`;

// export home page
export const Home = () => {
  return (
    <Container>
      <Banner />
      <TextComponent />
      <Courses />
    </Container>
  );
};
