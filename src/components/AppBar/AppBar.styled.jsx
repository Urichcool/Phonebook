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
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  margin-right: auto;
  align-items: center;
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
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
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
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

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

export const AppFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
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

export const AppFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppFooterText = styled.footer`
  margin: 0;
`;

export const AppFooterLink = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 5px;
  &:hover,
  &:focus {
    color: orange;
    transition: 500ms;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AppBarMobileNavContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const ContactsLinkMobile = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
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

export const AppBarMobileNavStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '25px',
    top: '10px',
    zIndex: '2000',
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
