import { useAuth } from 'hooks/useAuth';
import { UserMenu, UserMenuText, UserMenuButton } from './AppBar.styled';
import { BiLogOut } from 'react-icons/bi';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const AppBarUserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <UserMenu>

      <UserMenuText>User: {user.email}</UserMenuText>
      <UserMenuButton onClick={() => dispatch(logOut())}>
        <BiLogOut />
        Logout
      </UserMenuButton>
    </UserMenu>
  );
};
