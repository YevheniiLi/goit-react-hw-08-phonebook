import { useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import { NavLink} from 'react-router-dom';



export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
