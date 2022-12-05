import React, { useState } from 'react';
import './App.css';

import Hotels from '../Hotels/Hotels';
import Header from '../Header/Header';

import data from '../../constants/data';

function App() {
  const [hotelData, setHotelData] = useState([]);

  const filteredHotels = data.filter(
    (item) =>
      item.name === `${hotelData}` ||
      item.city === `${hotelData}` ||
      item.country === `${hotelData}`
  );
  return (
    <>
      <Header data={hotelData} setHotelData={setHotelData} />
      <div className="container">
        {!!hotelData.length && <Hotels dataHotels={filteredHotels} title="Available hotels" />}

        <Hotels dataHotels={data.slice(0, 4)} title="Homes guests loves" />
      </div>
    </>
  );
}

export default App;
