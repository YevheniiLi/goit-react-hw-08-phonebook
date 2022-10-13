import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogedIn, selectIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogedIn = useSelector(selectLogedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
