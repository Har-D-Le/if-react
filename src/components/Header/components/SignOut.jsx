import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logOut } from '../../../../public/images';
import { AuthContext } from '../../../context/context';

function SignOut({ isLogout, setIsLogout }) {
  const { setIsAuth } = useContext(AuthContext);

  function logOutFunc() {
    setIsAuth(false);
    setIsLogout(false);
  }

  return (
    <Link to="/">
      <button
        onClick={logOutFunc}
        className={`${isLogout ? 'logout' : 'logoutNone'}`}
      >
        <img src={logOut} alt="logout icon" className="nav-log-out" />
        <div className="text-logout">Sign out</div>
      </button>
    </Link>
  );
}

SignOut.propTypes = {
  isLogout: PropTypes.bool,
  setIsLogout: PropTypes.func
};

export default SignOut;
