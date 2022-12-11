import styled from "styled-components";
import { colors } from "../../utils/theme";

export const Wrapper = styled.div`
  background-color: #1e1f25;
  /* border: thin solid #475569; */
  padding: 0.75rem;
  height: 3rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Address = styled.h5``;
