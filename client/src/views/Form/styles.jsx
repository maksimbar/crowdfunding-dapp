import styled from "styled-components";
import { sharedPreferences } from "../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  background-color: #1e1f25;
  padding: 2rem;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  gap: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  align-self: center;
  width: 100%;
  max-width: 25rem;
  height: 2.5rem;
  font-weight: 600;
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

export const Title = styled.h1`
  margin: 0;
`;
