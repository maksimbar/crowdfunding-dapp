import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.75rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  color: #cdced0;
  padding: 10px;
  height: 3rem;
  border-radius: 10px;
  background-color: #101213;
  border: none;
  outline: none;
`;

export const Textarea = styled.textarea`
  resize: none;
  color: #cdced0;
  padding: 10px;
  border-radius: 10px;
  background-color: #101213;
  border: none;
  outline: none;
`;
