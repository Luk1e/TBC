// import styles
import styled from "styled-components";
import { respondTo } from "../../../utils/styles/_respondTo";
// import components
import { GridContainer } from "./GridContainer";

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: rgb(22, 22, 22);
`;

const TextContainer = styled.div`
  width: 90%;
  margin: 3rem 0;

  display: flex;
  flex-direction: column;

  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: rgb(219, 219, 219);

  ${respondTo.laptop`
   font-size: 1.5rem;
  `}

  ${respondTo.tablet`
   font-size: 1.4rem;
  `}

  ${respondTo.smallTablet`
   font-size: 1.3rem;
  `}

  ${respondTo.mobile`
   font-size: 1.5rem;
  `}
`;

// export course Component
export const Courses = () => {
  return (
    <Container>
      <TextContainer>
        <Text>სასწავლო კურსები</Text>
      </TextContainer>
      <GridContainer />
    </Container>
  );
};
