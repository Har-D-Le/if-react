import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation';
import Form from './components/Form';
import url from '../../constants/URL';

import './Header.css';
import { googleStore, appStore } from '../../../public/images';

function Header({ setIsLoading, setAvailableHotels, setError }) {
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
        <div className="col-12 page">
          <div className="h1-block">
            <h1>
              Discover stays <br />
              to live, work or just relax
            </h1>
          </div>
          <Form handleSearch={handleSearch} />
        </div>
        <div className="apps">
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
