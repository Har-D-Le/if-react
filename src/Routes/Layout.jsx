import React from 'react';
import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Layout({ setIsLoading, setAvailableHotels, setError }) {
  return (
    <>
      <Header
        setIsLoading={setIsLoading}
        setAvailableHotels={setAvailableHotels}
        setError={setError}
      />
      <Outlet />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  setIsLoading: PropTypes.bool,
  setAvailableHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setError: PropTypes.func
};

export default Layout;
