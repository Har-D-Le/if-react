import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../../Routes/Layout';
import Home from '../Home/Home';
import HotelProfile from '../Hotels/HotelProfile';
import { AuthContext } from '../../context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableHotels, setAvailableHotels] = useState(null);
  const auth = useMemo(() => ({ isAuth, setIsAuth }), []);

  return (
    <AuthContext.Provider
      value={auth}
    >
      <BrowserRouter>
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
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
