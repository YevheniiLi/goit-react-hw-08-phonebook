
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
import { selectAuth } from 'redux/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { Layout } from '../Layout';



const HomePage = lazy(() => import('//pages/Home'))
const Register = lazy(() => import('//pages/Register'))
const Login = lazy(() => import('//pages/Login'))
const ContactsPage = lazy(() => import('//pages/Phonebook'))


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing} = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing 
  ? ( <b>Refreshing user . . .</b>
  ) : (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/register" component={<Register />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/login" component={<Login />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/contacts" component={<ContactsPage />} />
        }
      />
    </Route>
  </Routes>
  )






  
  // );
};
