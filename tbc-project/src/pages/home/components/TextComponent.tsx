// Import styles
import styled from "styled-components";
import { respondTo } from "../../../utils/styles/_respondTo";

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 43, 43);
`;

const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  ${respondTo.desktop`
    width: 60%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: rgb(244, 244, 244);

  ${respondTo.laptop`
   font-size: 1.6rem;
  `}

  ${respondTo.tablet`
   font-size: 1.5rem;
  `}

  ${respondTo.smallTablet`
   font-size: 1.3rem;
  `}

  ${respondTo.mobile`
   font-size: 1.2rem;
  `}
`;

const Link = styled.a`
  cursor: pointer;
  height: auto;
  margin: 3rem 0;

  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  color: rgb(0, 174, 243);
  -webkit-transition: color 0.5s;
  transition: color 0.5s;

  ${respondTo.laptop`
   font-size: 1.3rem;
  `}

  ${respondTo.tablet`
   font-size: 1.2rem;
  `}

  ${respondTo.smallTablet`
   font-size: 1.1rem;
  `}

  ${respondTo.mobile`
   font-size: 1rem;
  `}

  &:hover {
    color: rgb(170, 170, 170);
  }
`;

// Text component
export const TextComponent = () => {
  return (
    <Container>
      <TextContainer>
        <Text>
          „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
          ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
          ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT მიმართულებით.
          წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა
          და მის პარტნიორ კომპანიებში.
        </Text>
        <Link>გაიგე მეტი</Link>
      </TextContainer>
    </Container>
  );
};
