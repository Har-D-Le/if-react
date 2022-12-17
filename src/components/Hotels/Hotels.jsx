import React from 'react';
import PropTypes from 'prop-types';
import './Hotels.css';
import HotelItem from './HotelItem';

function Hotels({ dataHotels, title }) {
  return (
    <>
      <h2 className="homes-h2">{title}</h2>
      <div className="col-12 col-ss-6 homes-content">
        {dataHotels.map((item) => (
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
