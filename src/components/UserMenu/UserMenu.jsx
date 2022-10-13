import { logOutUser } from 'redux/operationsAuth';
import { Div, UserText, UserButton } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/selectors';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <Div>
      <UserText>Welkom, {userName}</UserText>
      <UserButton onClick={logOut}>LOG OUT</UserButton>
    </Div>
  );
};
