import { NavigationLink } from 'components/styles/GlobalStyle';

export const AuthNav = () => {
  return (
    <div>
      <NavigationLink to="/register">
        Register
      </NavigationLink>
      <NavigationLink to="/login">
        Log In
      </NavigationLink>
    </div>
  );
};