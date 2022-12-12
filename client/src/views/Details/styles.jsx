import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  border-radius: 10px;
  /* background-color: #1e1f25; */
  /* display: flex; */
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  /* grid-template-columns: 1fr 0.5fr; */
  gap: 1rem;
`;

export const Form = styled.form`
  background-color: #1e1f25;
  /* background-color: red; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 30px;
  border-radius: 10px;
`;

export const FormHeading = styled.h3`
  text-align: center;
  color: grey;
  margin: 0;
`;

export const DonateInfo = styled.p`
  /* height: 4rem; */
  background-color: #101213;
  padding: 15px;
  border-radius: 10px;
  font-size: 0.75rem;
  margin: 0;
  /* width: 100%; */
  border: this solid grey;
`;

export const Img = styled.img`
  grid-column: span 2;
  border-radius: 10px;
  background-color: #1e1f25;
  /* padding: 30px; */
  height: 23rem;
  width: 100%;
`;

export const DynamicSpan = styled.span`
  font-size: 1.25rem;
`;

export const Context = styled.span`
  font-size: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  align-self: start;
  margin: 0;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Story = styled.div`
  grid-column: span 4;
  border-radius: 10px;
  background-color: #1e1f25;
  padding: 30px;
  /* width: 100%; */
`;

export const Heading = styled.h4`
  margin: 0;
`;

export const Description = styled.p``;

export const Backers = styled.div`
  grid-column: span 4;
  border-radius: 10px;
  background-color: #1e1f25;
  padding: 30px;
`;

export const ProjectInfo = styled.div`
  grid-column: span 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  background-color: #1e1f25;
  gap: 1rem;
`;

export const AuthorAddress = styled.span`
  color: #069954;
  font-weight: 600;
  font-size: 0.75rem;
`;

export const InfoVal = styled.span`
  color: #069954;
  font-weight: 600;
`;

export const BackedAmount = styled.span`
  color: #069954;
  font-weight: 600;
`;

export const NewDonation = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InfoContext = styled.span`
  font-weight: 600;
`;

export const InfoDetails = styled.span`
  font-size: 0.75rem;
`;

export const FrontInfo = styled.div`
  grid-column: span 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Author = styled.div`
  grid-column: span 4;
  padding: 1rem;
  border-radius: 10px;
  background-color: #1e1f25;
`;

export const Table = styled.table`
  border-color: white;
  width: 100%;
  /* border: 1px solid #ddd; */
  text-align: left;
  border-collapse: collapse;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 15px;
  border-bottom: 1px solid #4e4e4e;
`;

export const Td = styled.td`
  padding: 20px;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #3a3a3a;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2rem;
  border-radius: 10px;
  background-color: #3c54d0;
  color: #fff;
  border: none;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
