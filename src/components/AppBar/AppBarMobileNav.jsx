import { slide as Menu } from 'react-burger-menu';
import { PhoneBookNavLink } from './AppBar.styled';
import { BiLogIn, BiRegistered, BiLogOut } from 'react-icons/bi';
import {
  AppBarMobileNavContainer,
  AppBarMobileNavStyles,
} from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenuText, UserMenuButton } from './AppBar.styled';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { ContactsLinkMobile } from './AppBar.styled';
import { RiContactsFill } from 'react-icons/ri';
import { useState } from 'react';

export const AppBarMobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)  
  }
  
 
 const closeMenu = () => {
    setMenuOpen(false)
  }
  

  return (
    <AppBarMobileNavContainer>
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
        styles={AppBarMobileNavStyles}
      >
        {isLoggedIn ? (
          <>
            <ContactsLinkMobile
              onClick={() => closeMenu()}
              to={'contacts'}>
              <RiContactsFill />
              Contacts
            </ContactsLinkMobile>

            <UserMenuText
              style={{
                marginBottom: '10px',
                marginRight: '0',
              }}
            >
              User: {user.email}
            </UserMenuText>
            <UserMenuButton
              style={{
                marginRight: '0',
              }}
              onClick={() => {
                dispatch(logOut());
                closeMenu()
              }}
            >
              <BiLogOut />
              Logout
            </UserMenuButton>
          </>
        ) : (
          <>
            <PhoneBookNavLink
              onClick={() => closeMenu()}
              to={'register'}
              style={{
                marginBottom: '10px',
                marginRight: '0',
              }}
            >
              <BiRegistered />
              Register
            </PhoneBookNavLink>
            <PhoneBookNavLink
              onClick={() => closeMenu()}
              to={'login'}
              style={{
                marginRight: '0',
              }}
            >
              <BiLogIn />
              Login
            </PhoneBookNavLink>
          </>
        )}
      </Menu>
    </AppBarMobileNavContainer>
  );
};
