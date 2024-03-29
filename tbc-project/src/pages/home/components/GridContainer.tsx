// import styles
import styled from "styled-components";
import { respondTo } from "../../../utils/styles/_respondTo";
// import images
import AdvancePythonImage from "../../../assets/images/courses/advanced-python.webp";
import IntroToPythonImage from "../../../assets/images/courses/intro-to-python.webp";
import ReactImage from "../../../assets/images/courses/react.webp";
import TOTImage from "../../../assets/images/courses/tot.webp";
import IosDevelopmentImage from "../../../assets/images/courses/ios-development.webp";
import AdvanceCyberSecurityImage from "../../../assets/images/courses/advanced-cybersecurity.webp";
import BlockChainImage from "../../../assets/images/courses/blockchain.webp";
import DevopsImage from "../../../assets/images/courses/devops.webp";
import InformationSecurityImage from "../../../assets/images/courses/information-securit-governance.webp";

// import components
import { GridItem } from "./GridItem";

// styles
const Container = styled.div`
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

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 2rem;
  column-gap: 3rem;
`;

// export grid container
export const GridContainer = () => {
  return (
    <Container>
      <InnerContainer>
        <GridItem image={IosDevelopmentImage} title={"iOS Development"} />
        <GridItem image={ReactImage} title={"React"} />
        <GridItem image={IntroToPythonImage} title={"Intro to Python"} />
        <GridItem image={AdvancePythonImage} title={"Advanced Python"} />
        <GridItem
          image={AdvanceCyberSecurityImage}
          title={"Advanced Cybersecurity Course"}
        />
        <GridItem image={TOTImage} title={"ToT - Training of Trainers"} />
        <GridItem image={BlockChainImage} title={"Blockchain"} />
        <GridItem image={DevopsImage} title={"DevOps"} />
        <GridItem
          image={InformationSecurityImage}
          title={"Information Security Governance"}
        />
      </InnerContainer>
    </Container>
  );
};
