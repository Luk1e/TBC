// import styles
import styled from "styled-components";
import { UpArrowSVG } from "../../../assets/svg/UpArrowSVG";
import { DownArrowSVG } from "../../../assets/svg/DownArrowSVG";
// import hooks
import { useState } from "react";

interface QuestionProps {
  question: string;
  text: string;
  innerHTML?: React.ReactNode;
  lastText?: string;
}

// styles
const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: start;
  flex-direction: column;
  border-bottom: 1px solid rgb(63, 62, 62);
`;

const QuestionContainer = styled.div`
  cursor: pointer;
  width: 100%;

  display: flex;
  margin: 1.5rem 0;
`;

const QuestionText = styled.h3`
  font-weight: normal;
  color: rgb(244, 244, 244);
`;

const Arrow = styled.div`
  margin-left: auto;
  svg {
    fill: rgb(244, 244, 244);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem 0 2rem 0;
`;

const Text = styled.p`
  font-size: medium;
  color: rgb(244, 244, 244);
`;

const InnerText = styled.div`
  margin: 3rem 2rem;

  & p {
    font-size: medium;
    color: rgb(244, 244, 244);
  }

  &:empty {
    display: none;
  }
`;

// export question component
export const Question = ({
  question,
  text,
  innerHTML,
  lastText,
}: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <QuestionContainer onClick={() => setIsOpen(!isOpen)}>
        <QuestionText>{question}</QuestionText>
        <Arrow>{isOpen ? <UpArrowSVG /> : <DownArrowSVG />}</Arrow>
      </QuestionContainer>

      {isOpen && (
        <TextContainer>
          <Text> {text}</Text>
          <InnerText>{innerHTML}</InnerText>
          <Text>{lastText}</Text>
        </TextContainer>
      )}
    </Container>
  );
};
