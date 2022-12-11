import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils/theme";

export const Nav = styled.nav`
  /* position: relative; */

  height: 3rem;
  width: 100%;
  /* width: 5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ul = styled.ul`
  position: absolute;
  left: 1rem;
  background-color: #1e1f25;
  height: fit-content;
  /* width: 100%; */
  border-radius: 10px;
  display: flex;
  height: 3rem;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* margin: auto; */
  padding: 0.75rem;
  gap: 2rem;
  list-style: none;
`;

export const NavItem = styled.li``;

export const Link = styled(NavLink)`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  /* background-color: ${colors.primary}; */
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &.active {
    background-color: ${colors.secondary};
    color: #fff;
  }
  &:hover {
    background-color: ${colors.secondary};
    color: #fff;
  }
`;

export const Icon = styled.i`
  color: ${colors.primaryAlt};
  /* padding: 7px; */
  /* border-radius: 5px; */
`;

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
`;
export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Address = styled.h5``;

export const Container = styled.div`
  background-color: #1e1f25;
  /* position: absolute; */
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0.75rem;
  border-radius: 10px;
  gap: 0.5rem;
`;
