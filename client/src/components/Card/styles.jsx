import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  background-color: #1e1f25;
  border-radius: 10px;
  border: 3px solid transparent;
  min-width: 100%;
  height: 100%;
  /* width: 100%; */
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #393b45;
  }
`;

export const Content = styled.div`
  /* background-color: red; */
  align-items: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100%; */
  gap: 1rem;
`;

export const Picture = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h3`
  text-transform: capitalize;
  margin: 0;
`;

export const Description = styled.p`
  margin: 0;
  color: #a4a4a4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`;

export const Author = styled.span`
  margin: 0;
`;

export const Due = styled.span`
  margin: 0;
`;

export const Details = styled.div`
  display: flex;
  /* gap: 0.5rem; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  gap: 1rem;
  margin: auto;
`;
export const DetailsBlock = styled.div`
  padding: 0.5rem;
  border-radius: 10px;
  /* background-color: red; */
  /* width: 100%; */
  /* height: 3rem; */
  display: flex;
  align-items: center;
  gap: 0.25rem;
  /* flex-direction: column; */
  background-color: #393b45;
`;

export const Owner = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin: auto;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
`;
