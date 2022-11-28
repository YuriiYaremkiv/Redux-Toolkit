import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/userSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);

  const userLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <span
        style={{
          padding: 16,
        }}
      >
        Hi, {login}!
      </span>
      <button onClick={userLogout}>Log out</button>
    </div>
  );
};
