import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  color: #cdced0;
  padding: 10px;
  height: 1.5rem;
  border-radius: 10px;
  background-color: #101213;
  /* border: thin solid #475569; */
  border: none;
`;

export const Textarea = styled.textarea`
  resize: none;
  color: #cdced0;
  padding: 10px;
  border-radius: 20px;
  background-color: #101213;
  /* border: thin solid #475569; */
  border: none;
`;
