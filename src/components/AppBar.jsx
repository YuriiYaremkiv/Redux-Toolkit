import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 12,
      }}
    >
      <nav>{!isLoggedIn ? <Link to="/login">Log in</Link> : null}</nav>
      {isLoggedIn ? <UserMenu /> : null}
    </header>
  );
};
