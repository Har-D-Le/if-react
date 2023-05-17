import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logInAction } from '../../../redux/actions/userActions';

function SignIn() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInAction(user));
  };

  return (
    <div className={currentUser ? 'container-sign-inNone' : 'container-signIn'}>
      <h3 className="title-signIn">Sign in</h3>
      <form className="wrapper-input-value" onSubmit={handleSubmit}>
        <label className="label-email" htmlFor="email">
          Email address
        </label>
        <input
          onChange={handleInputChange}
          className="input-email"
          name="email"
          id="email"
          type="email"
        />
        <label className="label-password" htmlFor="password">Password</label>
        <input onChange={handleInputChange} className="input-password" id="password" name="password" />
        <button className="btn-signIn" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
