import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.75rem;
`;

export const Input = styled.input`
  font-size: 0.75rem;
  box-sizing: border-box;
  color: #cdced0;
  padding: 10px;
  height: 3rem;
  border-radius: 10px;
  background-color: #101213;
  border: none;
  outline: none;

  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  font-size: 0.75rem;
  resize: none;
  color: #cdced0;
  padding: 10px;
  border-radius: 10px;
  background-color: #101213;
  border: none;
  outline: none;
`;
