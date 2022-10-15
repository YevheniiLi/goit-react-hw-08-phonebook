import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';
import { UserMenuButton, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

      return (
    <Wrapper>
      <UserName>Welcome, {user.email}</UserName>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </Wrapper>
  );
};