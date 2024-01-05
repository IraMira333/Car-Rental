import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 0 0 auto;
  border-bottom: 1px solid #b5bd1c;
  //background-color: #095680;
  background: linear-gradient(to right, #095680, #ffffff);
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-family: Manrope;
  font-size: 24px;
  font-weight: 500;

  color: #555657;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #3470ff;
    font-weight: 700;
  }
`;
export const StyledNav = styled.nav`
  text-align: center;
`;
