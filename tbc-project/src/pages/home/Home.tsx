// import styles
import styled from "styled-components";
// import components
import { Banner } from "./components/Banner";
import { Courses } from "./components/Courses";
import { Carousel } from "./components/Carousel";
import { TextComponent } from "./components/TextComponent";
import { QuestionsComponent } from "./components/QuestionsComponent";

// styles
const Container = styled.div``;

// export home page
export const Home = () => {
  return (
    <Container>
      <Banner />
      <TextComponent />
      <Courses />
      <Carousel />
      <QuestionsComponent />
    </Container>
  );
};
