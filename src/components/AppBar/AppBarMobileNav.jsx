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

export const AppBarMobileNav = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <AppBarMobileNavContainer>
      <Menu right styles={AppBarMobileNavStyles}>
        {isLoggedIn ? (
          <>
            <ContactsLinkMobile
              to={'contacts'}
            >
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
              onClick={() => dispatch(logOut())}
            >
              <BiLogOut />
              Logout
            </UserMenuButton>
          </>
        ) : (
          <>
            <PhoneBookNavLink
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
