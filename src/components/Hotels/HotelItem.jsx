import React from 'react';
import PropTypes from 'prop-types';
import Hotels from './Hotels';
import './Hotels.css';

function HotelItem({item}) {
    return (
        <div className="col-3 col-ss-3 homes-content-wrap">
            <img className="homes-img" src={item.imageUrl} alt=""/>
            <div className="homes-item">{item.name}</div>
            <div className="homes-item-location">
                {item.city},{item.country}
            </div>
        </div>
    );
}

HotelItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string,
        imageUrl: PropTypes.string
    }).isRequired
};

export default HotelItem;
