import {
  AppHeader,
  PhoneBookLogo,
  AppHeaderContainer,
  ContactsLink
} from './AppBar.styled';
import { AppContainer } from 'components/App,styled';
import { AppBarNav } from './AppBarNav';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { useAuth } from 'hooks/useAuth';
import { AppBarUserMenu } from './AppBarUserMenu';
import { RiContactsFill } from 'react-icons/ri';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
 
  return (
    <>
      <AppHeader>
        <AppContainer>
          <AppHeaderContainer>
            <PhoneBookLogo to={'./'}>
              <MdOutlinePhoneAndroid />
              Phonebook
            </PhoneBookLogo>
            {isLoggedIn && (
              <ContactsLink to={'contacts'}>
                {' '}
                <RiContactsFill />
                Contacts
              </ContactsLink>
            )}
            {isLoggedIn ? <AppBarUserMenu /> : <AppBarNav />}
          </AppHeaderContainer>
        </AppContainer>
      </AppHeader>
    </>
  );
};
