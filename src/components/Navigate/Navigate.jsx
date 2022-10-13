import { useSelector } from 'react-redux';
import { selectLogedIn } from 'redux/selectors';
import { SiteNav, SiteLink } from 'components/App/App.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SiteNavigate = () => {
  const userLogedIn = useSelector(selectLogedIn);
 

  return (
    <SiteNav>
      <div>
        <SiteLink to="/home">HOME</SiteLink>
        {userLogedIn && <SiteLink to="/contactsPage">CONTACTS</SiteLink>}
      </div>

      {userLogedIn ? (
        <UserMenu />
      ) : (
        <div>
          <SiteLink to="/signUpPage">SIGN UP</SiteLink>
          <SiteLink to="/logInPage">LOG IN</SiteLink>
        </div>
      )}
    </SiteNav>
  );
};
