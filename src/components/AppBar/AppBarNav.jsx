import { PhoneBookNav, PhoneBookNavLink } from './AppBar.styled';
import { BiLogIn, BiRegistered } from 'react-icons/bi';

export const AppBarNav = () => {
  return (
    <PhoneBookNav>
      <PhoneBookNavLink to={'register'}>
        <BiRegistered /> Register
      </PhoneBookNavLink>
      <PhoneBookNavLink to={'login'}>
        <BiLogIn />
        Login
      </PhoneBookNavLink>
    </PhoneBookNav>
  );
};
