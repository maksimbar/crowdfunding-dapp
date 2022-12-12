import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  align-self: flex-start;
`;

export const CardBox = styled.div`
  border-radius: 20px;
  /* min-height: 35rem; */
  /* width: 100%; */
  display: grid;
  /* grid-template-columns: repeat(auto-fitminmax(250px, 1fr));
  g */
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  /* background-color: #1e1f25; */
`;
