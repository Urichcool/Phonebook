import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const AppHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: purple;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PhoneBookLogo = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 160px;
  &:hover,
  &:focus {
    color: orange;
  }
`;

export const PhoneBookNav = styled.nav`
  display: flex;
`;
export const PhoneBookNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    color: orange;
  }
  svg {
    margin-right: 5px;
  }
`;
