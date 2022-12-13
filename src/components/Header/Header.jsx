import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Form from './Form';
import './Header.css';
import { googleStore, appStore } from '../../../public/images';

function Header({ data, setHotelData }) {
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
          <Form data={data} setHotelData={setHotelData} />
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
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
