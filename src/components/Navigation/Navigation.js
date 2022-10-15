import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavigationLink } from 'components/styles/GlobalStyle';

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavigationLink to="/" end>
        Home
      </NavigationLink>
      {isLogIn && (
        <NavigationLink to="/contacts">
          Contacts
        </NavigationLink>
      )}
    </nav>
  );
};
