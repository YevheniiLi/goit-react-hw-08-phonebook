import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogedIn } from 'redux/selectors';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLogedIn = useSelector(selectLogedIn);
  return isLogedIn ? <Navigate to={redirectTo} /> : component;
};
