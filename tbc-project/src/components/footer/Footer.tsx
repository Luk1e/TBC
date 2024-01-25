// import styles
import styled from "styled-components";
import { respondTo } from "../../utils/styles/_respondTo";
// import images
import TBCImage from "../../assets/images/footer/tbc.webp";
import FacebookImage from "../../assets/images/footer/facebook.webp";
import YoutubeImage from "../../assets/images/footer/youtube.webp";

//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.89);
`;

const InnerContainer = styled.div`
  width: 90%;

  margin: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;

  ${respondTo.desktop`
    width: 70%;
  `};

  ${respondTo.tv`
    width: 60%;
  `};

  .visible {
    display: flex;
  }

  .hidden {
    display: none;
  }

  ${respondTo.mobile`
    & .visible{
        display: none;
    }

    & .hidden{
        display:flex;
    }
  `}

  ${respondTo.smallTablet`
    & .visible{
        display: none;
    }
    
    & .hidden{
        display:flex;
    }
  `}
`;

const ImageContainer = styled.div`
  display: flex;

  ${respondTo.mobile`
    display: grid;
    row-gap: 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr; 
  `}

  ${respondTo.smallTablet`
    display: grid;
    row-gap: 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr; 
  `}
`;

const DuoImageContainer = styled.div`
  display: flex;
  margin-left: auto;
  grid-column: 3 / span 1;

  :last-child {
    margin-left: 1rem;
  }

  & * {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 36px;

  &:first-of-type {
    grid-column: 1 / span 3;
  }
`;

const SubContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  color: rgb(244, 244, 244);
  & * {
    margin: 1.5rem 0;
  }
`;

const Text = styled.p``;
const TextLink = styled.a`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(244, 244, 244, 0.6);
  }
`;

const Button = styled.button`
  cursor: pointer;
  height: min-content;

  margin-top: auto;
  margin-left: auto;
  font-size: medium;
  padding: 0.5rem 3rem;
  color: rgb(244, 244, 244);

  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: rgb(0, 174, 243);

  &:hover {
    color: rgb(53, 49, 49);
    background-color: rgb(213, 213, 213);
  }

  ${respondTo.mobile`
    margin:0;
  `}

  ${respondTo.smallTablet`
    margin:0;
  `}
`;

// export footer component
export const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Image src={TBCImage} />
          <Button className="hidden">მოგვწერეთ</Button>

          <DuoImageContainer>
            <Image src={FacebookImage} />
            <Image src={YoutubeImage} />
          </DuoImageContainer>
        </ImageContainer>

        <SubContainer>
          <TextContainer>
            <Text>© 2023 ყველა უფლება დაცულია </Text>
            <TextLink>წესები და პირობები</TextLink>
          </TextContainer>
          <Button className="visible">მოგვწერეთ</Button>
        </SubContainer>
      </InnerContainer>
    </Container>
  );
};
