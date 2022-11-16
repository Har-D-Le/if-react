import React from 'react';
import './Hotels.css';

function Hotels({ data }) {
  return (
    <div className="container">
      <h2 className="homes-h2">Homes guests loves</h2>
      <div className="col-12 col-ss-6 homes-content">
        {data.map((item) => (
          <div className="col-3 col-ss-3 homes-content-wrap" key={item.id}>
            <img className="homes-img" src={item.imageUrl} alt="" />
            <div className="homes-item">{item.name}</div>
            <div className="homes-item-location">
              {item.city},{item.country}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
