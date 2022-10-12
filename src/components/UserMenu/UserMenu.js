import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  return (
    <div >
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};