import React, { useContext, useState } from 'react';

import { users } from '../../../constants/constans';
import { AuthContext } from '../../../context/context';

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function handleLogin() {
    if (email && password) {
      users.forEach((item) => {
        if (item.email === email.toString() && item.password === password.toString()) {
          setIsAuth(true);
        }
      });
    }
  }

  function checkEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function checkPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div className={isAuth ? 'container-sign-inNone' : 'container-signIn'}>
      <h3 className="title-signIn">Sign in</h3>
      <form className="wrapper-input-value">
        <label className="label-email" htmlFor="email">
          Email address
        </label>
        <input
          onChange={checkEmail}
          className="input-email"
          name="email"
          id="email"
          type="email"
        />
        <label className="label-password" htmlFor="password">Password</label>
        <input onChange={checkPassword} className="input-password" id="password" />
        <button onClick={handleLogin} className="btn-signIn" type="reset">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
