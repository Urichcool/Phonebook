import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
  background-color: #d601d6;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PhoneBookLogo = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 25px;
  font-weight: 700;
  margin-right: 25px;
  display: flex;
  align-items: center;
  width: 160px;
  &.active {
    color: #88e3fa;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: orange;
    transition: 500ms;
  }
`;

export const ContactsLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  margin-right: auto;
  display: flex;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #88e3fa;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: orange;
  }
  svg {
    margin-right: 5px;
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
  &.active {
    color: #88e3fa;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: orange;
    transition: 500ms;
  }
  svg {
    margin-right: 5px;
  }
`;


export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`

export const UserMenuText = styled.p`
  margin: 0;
  margin-right: 40px;
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: inherit;
  padding: 0;
  background-color: transparent;
  border: none;
  svg {
    margin-right: 5px;
  }
  &:hover,
  &:focus {
    color: orange;
    transition: 500ms;
  }
`;

