import { GlobalStyle } from '../styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from '../Pages/ContactsPage';
import { HomePage } from '../Pages/HomePage';
import { SignUpPage } from '../Pages/SignUpPage';
import { LogInPage } from '../Pages/LogInPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operationsAuth';
import { SiteNavigate } from '../Navigate/Navigate';
import { RestrictedRoute } from '../Routes/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from '../Routes/PrivateRoute/PrivateRoute';


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Refresh by ...'
  ) : (
    <div>
      <SiteNavigate />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/signUpPage"
          element={
            <RestrictedRoute
              redirectTo="/contactsPage"
              component={<SignUpPage />}
            />
          }
        />
        <Route
          path="/logInPage"
          element={
            <RestrictedRoute
              redirectTo="/contactsPage"
              component={<LogInPage />}
            />
          }
        />
        <Route
          path="/contactsPage"
          element={
            <PrivateRoute
              redirectTo="/logInPage"
              component={<ContactsPage />}
            />
          }
        />
      </Routes>

      <GlobalStyle />
    </div>
  );
};
