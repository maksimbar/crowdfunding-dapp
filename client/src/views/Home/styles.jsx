import styled from "styled-components";
import { sharedPreferences } from "../../utils/theme";

export const Title = styled.h1`
  margin: 0;
  align-self: flex-start;
`;

export const CardBox = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
