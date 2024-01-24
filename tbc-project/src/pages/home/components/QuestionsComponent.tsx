// import styles
import styled from "styled-components";
import { respondTo } from "../../../utils/styles/_respondTo";
// import components
import { Question } from "./Question";

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(22, 22, 22);
`;

const InnerContainer = styled.div`
  display: flex;
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5rem;

  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;

  & .last {
    display: none;
  }

  ${respondTo.mobile`
    & .last{
        margin:0;
        width:100%;
        text-align: center;        
        display: block !important;
    }
  `}

  ${respondTo.smallTablet`
    & .last{
        margin:0;
        width:100%;
        text-align: center;        
        display: block !important;
    }
  `}
`;

const Text = styled.h2`
  padding: 0;
  font-size: 1.5rem;
  font-weight: normal;
  color: rgb(244, 244, 244);

  ${respondTo.laptop`
   font-size: 1.5rem;
  `}

  ${respondTo.tablet`
   font-size: 1.4rem;
  `}

  ${respondTo.smallTablet`
   font-size: 1.4rem;
  `}

  ${respondTo.mobile`
   font-size: 1.4rem;
  `}
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 1.3rem;
  margin-left: auto;

  font-weight: bold;
  color: rgb(0, 174, 243);

  transition: color 0.5s;
  -webkit-transition: color 0.5s;

  ${respondTo.smallTablet`
   font-size: 1.2rem;
   display:none;
  `}

  ${respondTo.mobile`
   font-size: 1.2rem;
   display:none;
  `}

  &:hover {
    color: rgb(170, 170, 170);
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;

// export questions component
export const QuestionsComponent = () => {
  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <Text>ხშირად დასმული კითხვები</Text>
          <Link>ყველა კითხვა</Link>
        </TextContainer>

        <QuestionContainer>
          <Question
            text="კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:"
            innerHTML={
              <>
                <p>
                  <b>I ეტაპი - </b>პირველ ეტაპზე საჭიროა, შეავსო სასურველი
                  კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც
                  განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის
                  დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.
                </p>
                <br />
                <p>
                  <b>II ეტაპი - </b> შერჩევის მეორე ეტაპი კურსების მიხედვით
                  განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ
                  კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის
                  შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
                </p>
                <br />
                <p>
                  <b>III ეტაპი - </b>მესამე ეტაპი კურსების მიხედვით
                  განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული
                  ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი
                  ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის
                  წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური
                  დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
                </p>
                <br />
                <p>
                  <b>IV ეტაპი - </b>შერჩევის ბოლო მეოთხე ეტაპი მოიცავს
                  გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით
                  გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი
                  ხელშეკრულება.
                </p>
              </>
            }
            lastText="* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. "
            question="როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?"
          />
          <Question
            text="TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე."
            question="შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?"
          />
          <Question
            text="პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ."
            question="რა ღირს სწავლა პროგრამის ფარგლებში?"
          />
        </QuestionContainer>

        <TextContainer>
          <Link className="last">ყველა კითხვა</Link>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};
