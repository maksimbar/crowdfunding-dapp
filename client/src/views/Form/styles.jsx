import styled from "styled-components";

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
`;

export const FormButton = styled.button`
  cursor: pointer;
  width: 25rem;
  font-weight: 600;
  align-self: center;
  background-color: #3c54d0;
  border: thin solid #3d3d3d;
  height: 2.5rem;
  border-radius: 10px;
  color: white;
`;
