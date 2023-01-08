import {
  AppHeader,
  PhoneBookLogo,
  PhoneBookNav,
  PhoneBookNavLink,
  AppHeaderContainer,
} from './AppBar.styled';
import { AppContainer } from 'components/App,styled';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { BiLogIn, BiRegistered } from 'react-icons/bi';

export const AppBar = () => {
  return (
    <AppHeader>
      <AppContainer>
        <AppHeaderContainer>
          <PhoneBookLogo to={'./'}>
            <MdOutlinePhoneAndroid />
            Phonebook
          </PhoneBookLogo>
          <PhoneBookNav>
            <PhoneBookNavLink to={'./register'}>
              <BiRegistered /> Register
            </PhoneBookNavLink>
            <PhoneBookNavLink to={'./login'}>
              <BiLogIn />
              Login
            </PhoneBookNavLink>
          </PhoneBookNav>
        </AppHeaderContainer>
      </AppContainer>
    </AppHeader>
  );
};
