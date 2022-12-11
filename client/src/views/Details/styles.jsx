import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  border-radius: 20px;
  padding: 2rem;
  /* background-color: #1e1f25; */
  /* display: flex; */
  display: grid;
  /* grid-template-columns: 1fr 0.5fr; */
  gap: 2rem;
`;

export const Form = styled.form`
  background-color: #1e1f25;
  /* background-color: red; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 30px;
  border-radius: 20px;
`;

export const Img = styled.img`
  border-radius: 20px;
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

export const Title = styled.h1``;

export const Subtitle = styled.h2``;

export const TitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Story = styled.div`
  border-radius: 20px;
  background-color: #1e1f25;
  padding: 30px;
  /* width: 100%; */
`;

export const Heading = styled.h5``;

export const Description = styled.p``;

export const Backers = styled.div`
  border-radius: 20px;
  background-color: #1e1f25;
  padding: 30px;
`;

export const Box = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 20px;
  background-color: #1e1f25;
  padding: 30px;
`;

export const BoxContainer = styled.div`
  display: flex;
  /* width: 100%; */
  /* flex-direction: column; */
  gap: 1rem;
`;

export const BoxVal = styled.div``;

export const BoxContext = styled.div``;
