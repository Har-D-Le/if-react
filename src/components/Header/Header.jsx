import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation';
import Form from './components/Form';
import url from '../../constants/URL';
import { AuthContext } from '../../context/context';

import './Header.css';
import { googleStore, appStore } from '../../../public/images';

function Header({ setIsLoading, setAvailableHotels, setError }) {
  const { isAuth } = useContext(AuthContext);

  const handleSearch = useCallback((searchString) => {
    url.searchParams.set('search', `${searchString}`);
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setAvailableHotels(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [setIsLoading, setAvailableHotels]);

  return (
    <section className="start">
      <div className="container">
        <Navigation />
        <div className={isAuth ? 'col-12 page' : 'pageNone'}>
          <div className="h1-block">
            <h1>
              Discover stays <br />
              to live, work or just relax
            </h1>
          </div>
          <Form handleSearch={handleSearch} />
        </div>
        <div className={isAuth ? 'apps' : 'appsNone'}>
          <img src={googleStore} alt={googleStore} className="google-play" />
          <img src={appStore} alt={appStore} className="app-store" />
        </div>
      </div>
    </section>
  );
}

Header.propTypes = {
  setIsLoading: PropTypes.bool,
  setAvailableHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setError: PropTypes.func
};

export default Header;
