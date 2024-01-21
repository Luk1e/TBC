// import styles
import styled from "styled-components";
import { respondTo } from "../../../utils/styles/_respondTo";
import backgroundImage from "../../../assets/images/background-image.webp";

// styles
const Container = styled.div`
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  ${respondTo.mobile`
      height: 329px;
  `}
`;

const TextContainer = styled.div`
  width: 90%;
  margin-bottom: 2rem;

  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
`;

const Text = styled.h1`
  color: rgb(244, 244, 244);
  font-weight: 900;
  font-size: 2.8rem;

  ${respondTo.mobile`
   font-size: 2.2rem;
  `}
`;

// export banner
export const Banner = () => {
  return (
    <Container>
      <TextContainer>
        <Text>TBC x USAID</Text>
        <Text>ტექნოლოგიური განათლებისთვის</Text>
      </TextContainer>
    </Container>
  );
};
