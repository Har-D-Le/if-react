import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../Routes/Layout';
import Home from '../Home/Home';
import HotelProfile from '../Hotels/HotelProfile';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableHotels, setAvailableHotels] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Layout
            setError={setError}
            setIsLoading={setIsLoading}
            setAvailableHotels={setAvailableHotels}
          />
)}
      >
        <Route
          index
          element={(
            <Home
              availableHotels={availableHotels}
              setAvailableHotels={setAvailableHotels}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              error={error}
              setError={setError}
            />
              )}
        />
        <Route path="hotels/:hotelId" element={<HotelProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
