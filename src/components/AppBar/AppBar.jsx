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
          <PhoneBookLogo>
            <MdOutlinePhoneAndroid />
            Phonebook
          </PhoneBookLogo>
          <PhoneBookNav>
            <PhoneBookNavLink>
              <BiRegistered /> Register
            </PhoneBookNavLink>
            <PhoneBookNavLink>
              <BiLogIn />
              Login
            </PhoneBookNavLink>
          </PhoneBookNav>
        </AppHeaderContainer>
      </AppContainer>
    </AppHeader>
  );
};
