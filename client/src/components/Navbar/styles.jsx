import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils/theme";

export const Nav = styled.nav`
  box-sizing: border-box;
  position: relative;
  background-color: #1e1f25;
  border-radius: 10px;
  height: 4rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  padding: 0;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  list-style: none;
`;

export const NavItem = styled.li``;

export const Link = styled(NavLink)`
  width: 0.5rem;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
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
`;

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Address = styled.h5`
  margin: 0;
`;

export const Container = styled.div`
  position: absolute;
  right: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 10px;
  gap: 0.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  background-color: #3c54d0;
  border: none;
  height: 2rem;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
