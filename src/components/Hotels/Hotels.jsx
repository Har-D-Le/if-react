import React from 'react';
import PropTypes from 'prop-types';

import './Hotels.css';
import HotelItem from './HotelItem';

function Hotels({ title, hotels }) {
  return (
    <>
      <h2 className="homes-h2">{title}</h2>
      {hotels.length > 0 ? (
        <div className="col-12 col-ss-6 homes-content">
          {hotels.slice(0, 4).map((item) => (
            <HotelItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>Nothing found</div>
      )}
    </>
  );
}

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string
};

export default Hotels;
