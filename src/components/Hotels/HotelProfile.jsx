import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function HotelProfile() {
  const [HotelProfile, setHotelProfile] = useState([]);
  const { hotelId } = useParams();

  useEffect(() => {
    fetch(`https://if-student-api.onrender.com/api/hotels/${hotelId}`)
      .then((response) => response.json())
      .then((result) => {
        setHotelProfile(result);
      });
  }, [hotelId]);

  return (
    <div className="container">
      <h2 className="homes-h2">Hotel profile</h2>
      <div className="col-12 col-ss-6 homes-content">
        <div className="col-3 col-ss-3 homes-content-wrap">
          <img
            className="homes-img"
            src={HotelProfile.imageUrl}
            alt={HotelProfile.name}
          />
          <div className="homes-item">{HotelProfile.name}</div>
          <div className="homes-item-location">
            {HotelProfile.city},{HotelProfile.country}
          </div>
          <button className="btn-back"><Link className="link-btn-back" to="/">Back to homepage</Link></button>
        </div>
      </div>
    </div>
  );
}

export default HotelProfile;
