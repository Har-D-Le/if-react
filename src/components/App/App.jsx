import React, { useState } from 'react';
import './App.css';

import Hotels from '../Hotels/Hotels';
import Header from '../Header/Header';

import data from '../../constants/data';

function App() {
  const [hotelData, setHotelData] = useState([]);

  const getSearchedHotel = (search) => {
      const filteredHotels = data.filter(
          (item) =>
              item.name === `${search}` ||
              item.city === `${search}` ||
              item.country === `${search}`
      );
      setHotelData(filteredHotels)
  }

  return (
    <>
      <Header setHotelData={getSearchedHotel} />
      <div className="container">
        {hotelData.length && <Hotels dataHotels={hotelData} title="Available hotels" />}

        <Hotels dataHotels={data.slice(0, 4)} title="Homes guests loves" />
      </div>
    </>
  );
}

export default App;
