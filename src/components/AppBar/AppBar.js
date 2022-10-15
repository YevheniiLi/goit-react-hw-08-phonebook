import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLogIn = useSelector(selectIsLoggedIn)
  return (
    <Header>
          <Navigation />
          {!isLogIn ? <AuthNav/> : <UserMenu/>}
    </Header>
  );
};
