import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../../public/images';
import { logOutAction } from '../../../store/actions';

function SignOut({ isShown }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogOut = () => {
    dispatch(logOutAction());
  };

  return (
    <Link to="/">
      <button
        onClick={handleLogOut}
        className={(isShown && user) ? 'logout' : 'logoutNone'}
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
