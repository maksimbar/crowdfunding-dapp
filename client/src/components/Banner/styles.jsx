import styled from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  cursor: not-allowed;
`;

export const Wrapper = styled.div`
  cursor: auto;
  z-index: 1;
  position: absolute;
  padding: 10px;
  left: 20px;
  right: 20px;
  height: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #1e1f25;
  /* border: thin solid #33449c; */
`;

export const Warning = styled.p``;
