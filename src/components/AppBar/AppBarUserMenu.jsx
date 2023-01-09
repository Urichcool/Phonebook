import { useAuth } from 'hooks/useAuth';
import {
  UserMenu,
  UserMenuText,
  UserMenuButton
} from './AppBar.styled';
import {BiLogOut} from 'react-icons/bi'

export const AppBarUserMenu = () => {
  const { user } = useAuth();

  return (
    <UserMenu>
      <UserMenuText>User: {user.email}</UserMenuText>
      <UserMenuButton><BiLogOut/>Logout</UserMenuButton>
    </UserMenu>
  );
};
