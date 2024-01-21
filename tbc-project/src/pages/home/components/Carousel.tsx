// imports styles
import styled from "styled-components";
import { respondTo } from "../../../utils/styles/_respondTo";
// import images
import USAIDImage from "../../../assets/images/partners/usaid.webp";
import SpaceIntImage from "../../../assets/images/partners/space-int.webp";
import TinetiImage from "../../../assets/images/partners/tineti.webp";
import TegetaImage from "../../../assets/images/partners/tegeta.webp";
import SpectreImage from "../../../assets/images/partners/spectre.webp";
import TibiciLizingi from "../../../assets/images/partners/tibisi-lizingi.webp";
import MultisagadasaxadoSistemebi from "../../../assets/images/partners/multisagadasaxado-sistemebi.webp";
// import hooks
import { useState } from "react";

// styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 43, 43);
`;

const TextContainer = styled.div`
  width: 90%;
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

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

interface ArrowProps {
  direction: "left" | "right";
}

const Arrow = styled.div<ArrowProps>`
  position: absolute;
  bottom: 0%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 3rem;
  color: rgb(232, 230, 230);
  ${(props) => (props.direction === "left" ? "left: 3rem;" : "right:3rem;")}

  &:hover {
    color: rgb(232, 230, 230, 0.5);
  }

  ${(props: any) =>
    props.direction === "left"
      ? respondTo.laptop`left: 1rem;`
      : respondTo.laptop`right: 1rem;`}

  ${(props: any) =>
    props.direction === "left"
      ? respondTo.tablet`left: 1rem;`
      : respondTo.tablet`right: 1rem;`}

  ${respondTo.tablet`display:none;`};
  ${respondTo.mobile`display:none;`};
  ${respondTo.smallTablet`display:none;`};
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(232, 230, 230);
  margin: 0 5px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;
  ${respondTo.desktop`
    width: 70%;
  `};

  ${respondTo.tv`
    width: 60%;
  `};

  ${respondTo.mobile`flex-direction:column;align-items:center;justify-content:center;`};
  ${respondTo.tablet`flex-direction:column;align-items:center;justify-content:center;`};
  ${respondTo.smallTablet`flex-direction:column;align-items:center;justify-content:center;`};
`;

const Image = styled.img`
  height: 74px;

  ${respondTo.mobile`
    margin-bottom:4rem;
    width:80%;
  `};

  ${respondTo.smallTablet` 
    margin-bottom:4rem;
    width:80%;
  `};

  ${respondTo.tablet` 
    height: 84px;
    margin-bottom:4rem;
    width:70%;
  `};
`;

// export carousel component
export const Carousel = () => {
  // images url array
  const imageUrls = [
    USAIDImage,
    SpaceIntImage,
    TinetiImage,
    TegetaImage,
    SpectreImage,
    TibiciLizingi,
    MultisagadasaxadoSistemebi,
  ];

  const [currentSlide, setCurrentSlide] = useState(2);
  // function to show next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1 > 2 ? 0 : currentSlide + 1);
  };
  // function to show previous slide
  const previousSlide = () =>
    setCurrentSlide(currentSlide - 1 < 0 ? 2 : currentSlide - 1);

  return (
    <Container>
      <TextContainer>
        <Text>პროექტის პარტნიორები</Text>
      </TextContainer>

      <CarouselContainer>
        <Arrow direction="left" onClick={() => previousSlide()}>
          &#10094;
        </Arrow>

        <ImageContainer>
          {imageUrls
            .slice(currentSlide * 3, currentSlide * 3 + 3)
            .map((imageUrl, index) => (
              <Image key={index} src={imageUrl} />
            ))}
        </ImageContainer>

        <Arrow direction="right" onClick={() => nextSlide()}>
          &#10095;
        </Arrow>
      </CarouselContainer>
      <DotContainer>
        {Array.from({ length: Math.ceil(imageUrls.length / 3) }).map(
          (_, index) => (
            <Dot key={index} onClick={() => setCurrentSlide(index)} />
          )
        )}
      </DotContainer>
    </Container>
  );
};
