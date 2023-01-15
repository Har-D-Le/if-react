import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from '../../Routes/Layout';
import Home from '../Home/Home';
import HotelProfile from '../Hotels/HotelProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hotels/:hotelId" element={<HotelProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
