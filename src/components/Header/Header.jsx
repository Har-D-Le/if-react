import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation';
import Form from './components/Form';
import './Header.css';
import { googleStore, appStore } from '../../../public/images';

function Header({ setHotelData }) {
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
          <Form setHotelData={setHotelData} />
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
  setHotelData: PropTypes.func,
};

export default Header;
