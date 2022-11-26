import React from 'react';
import PropTypes from 'prop-types';
import './Hotels.css';
import HotelItem from './HotelItem';

function Hotels({ data }) {
 return (
  <div className="container">
   <h2 className="homes-h2">Homes guests loves</h2>
   <div className="col-12 col-ss-6 homes-content">
    {data.map((item) => (
     <HotelItem key={item.id} item={item} />
    ))}
   </div>
  </div>
 );
}

Hotels.propTypes = {
 data: PropTypes.arrayOf(
  PropTypes.shape({
   id: PropTypes.string,
   name: PropTypes.string,
   city: PropTypes.string,
   country: PropTypes.string,
   imageUrl: PropTypes.string
  })
 ).isRequired
};

export default Hotels;
