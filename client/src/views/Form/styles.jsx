import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* background-color: #1e1f25; */
  /* margin-top: 4rem; */
`;

export const Container = styled.div`
  background-color: #1e1f25;
  padding: 2rem;
  /* width: 100%; */
  display: flex;
  border-radius: 2rem;
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
  border-radius: 20px;
  color: white;
`;
