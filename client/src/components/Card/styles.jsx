import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  background-color: #1e1f25;
  border-radius: 10px;
  border: 3px solid transparent;
  min-width: 100%;
  height: 100%;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #282930;
  }
`;

export const Content = styled.div`
  align-items: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  gap: €rem;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
export const DetailsBlock = styled.div`
  padding: 0.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  /* background-color: #444954; */
  font-weight: 600;
`;

export const Owner = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin: auto;
`;

export const Tag = styled.span`
  font-size: 0.5rem;
`;
