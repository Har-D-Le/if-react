import React, { useState, useMemo, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../../context/context';
import Layout from '../../Routes/Layout';
import Home from '../Home/Home';
import HotelProfile from '../Hotels/HotelProfile';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableHotels, setAvailableHotels] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const signOut = () => {
    setCurrentUser(null);
  };

  const contextValue = useMemo(() => ({
    currentUser,
    signIn,
    signOut
  }), [currentUser, signIn]);

  return (
    <UserContext.Provider
      value={contextValue}
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
    </UserContext.Provider>
  );
}

export default App;
