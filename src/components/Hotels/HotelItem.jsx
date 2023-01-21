import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Hotels.css';

function HotelItem({ item }) {
  return (
    <Link to={`hotels/${item.id}`} className="col-3 col-ss-3 homes-content-wrap">
      <img className="homes-img" src={item.imageUrl} alt="" />
      <div className="homes-item">{item.name}</div>
      <div className="homes-item-location">
        {item.city},{item.country}
      </div>
    </Link>
  );
}

HotelItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default HotelItem;
