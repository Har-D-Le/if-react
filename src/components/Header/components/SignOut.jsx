import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logOut } from '../../../../public/images';
import UserContext from '../../../context/context';

function SignOut({ isShown }) {
  const { signOut, currentUser } = useContext(UserContext);

  const handleLogOut = () => {
    signOut();
  };

  return (
    <Link to="/">
      <button
        onClick={handleLogOut}
        className={(isShown && currentUser) ? 'logout' : 'logoutNone'}
      >
        <img src={logOut} alt="logout icon" className="nav-log-out" />
        <div className="text-logout">Sign out</div>
      </button>
    </Link>
  );
}

SignOut.propTypes = {
  isShown: PropTypes.bool
};

export default SignOut;
