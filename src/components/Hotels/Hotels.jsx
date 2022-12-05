import React from 'react';
import PropTypes from 'prop-types';
import './Hotels.css';
import HotelItem from './HotelItem';
import data from '../../constants/data';

function Hotels({ dataHotels, title }) {
  return (
    <>
      <h2 className="homes-h2">Homes guests loves</h2>
      <div className="col-12 col-ss-6 homes-content">
        {data.map((item) => (
          <HotelItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

Hotels.propTypes = {
  dataHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string
};

export default Hotels;
