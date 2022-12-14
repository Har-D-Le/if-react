import React, { useState } from 'react';
import './App.css';

import Hotels from '../Hotels/Hotels';
import Header from '../Header/Header';

import data from '../../constants/data';

function App() {
  const [hotelData, setHotelData] = useState(null);

  const getSerchedHotel = (search) => {
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
      <Header data={hotelData} setHotelData={getSerchedHotel} />
      <div className="container">
        {!!hotelData && <Hotels dataHotels={hotelData} title="Available hotels" />}

        <Hotels dataHotels={data.slice(0, 4)} title="Homes guests loves" />
      </div>
    </>
  );
}

export default App;
