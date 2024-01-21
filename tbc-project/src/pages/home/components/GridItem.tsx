// import styles
import styled from "styled-components";
import { ArrowSVG } from "../../../assets/svg/ArrowSVG";
import { respondTo } from "../../../utils/styles/_respondTo";

interface GridItemProps {
  image: string;
  title: string;
}
// styles
const Container = styled.div`
  height: 414px;

  display: flex;
  text-align: center;
  flex-direction: column;

  border-radius: 8px;
  background: transparent;
  border: 1px solid gray;

  ${respondTo.smallTablet`
    height:500px;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const InnerContainer = styled.div`
  height: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 1.5rem;
`;

const Title = styled.h2`
  color: rgb(244, 244, 244);
  font-weight: normal;
`;

const Text = styled.p`
  margin-top: 2rem;
  color: rgb(244, 244, 244);
`;

const Link = styled.a`
  cursor: pointer;
  display: flex;
  margin-top: auto;
  align-items: center;

  color: rgb(0, 174, 239);
  transition: all 0.3s ease;

  svg {
    fill: rgb(0, 174, 239);

    margin-right: 0.7rem;
    margin-top: 0.2rem;
  }

  &:hover {
    color: rgb(0, 174, 239, 0.6);
  }
`;

// export grid item
export const GridItem = ({ image, title }: GridItemProps) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <InnerContainer>
        <Title>{title}</Title>
        <Text>რეგისტრაცია დასრულებულია</Text>
        <Link>
          <ArrowSVG />
          კურსის დეტალები
        </Link>
      </InnerContainer>
    </Container>
  );
};
