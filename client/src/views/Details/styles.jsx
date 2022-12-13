import styled from "styled-components";
import { sharedPreferences } from "../../utils/theme";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Form = styled.form`
  display: none;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #1e1f25;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 30px;
  border-radius: 10px;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-column: span 4;
  }
`;

export const FormHeading = styled.h3`
  text-align: center;
  color: grey;
  margin: 0;
`;

export const DonateInfo = styled.p`
  background-color: #101213;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  font-size: 0.75rem;
  margin: 0;
  border: this solid grey;
`;

export const Img = styled.img`
  grid-column: span 2;
  border-radius: 10px;
  background-color: #1e1f25;
  height: 23rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-column: span 4;
  }
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: span 2;
  border-radius: 10px;
  background-color: #1e1f25;
  padding: 30px;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-column: span 4;
  }
`;

export const Heading = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin: 0;
`;

export const Backers = styled.div`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  background-color: #1e1f25;
  padding: 30px;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-column: span 4;
  }
`;

export const ProjectInfo = styled.div`
  grid-column: span 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-column: span 4;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  background-color: #1e1f25;
  gap: 1rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-column: span 4;
  }
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
  font-size: 0.75rem;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  text-align: left;
  border-collapse: collapse;
`;

export const BackersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TxBlock = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CompaignDetails = styled.div`
  grid-column: span 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListEl = styled.span`
  margin: 0;
  font-size: 0.8rem;
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

export const CompletionWarning = styled.div`
  grid-column: span 4;
  padding: 2rem;
  font-size: 1rem;
  font-weight: 550;
  border-radius: 10px;
  background-color: #1e1f25;
  text-align: center;
`;
