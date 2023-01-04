import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import Hotels from '../Hotels/Hotels';
import Header from '../Header/Header';
import url from '../../constants/URL';

function App() {
  const [destinationValue, setDestinationValue] = useState('');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [defaultHotels, setDefaultHotels] = useState(null);
  const [availableHotels, setAvailableHotels] = useState(null);

  const handleDestinationChange = (destination) => {
    setDestinationValue(destination);
  };

  useEffect(() => {
    fetch(`${url}/popular`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(true);
        setDefaultHotels(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  const handleSearch = useCallback(() => {
          url.searchParams.set('search', `${destinationValue}`);
          fetch(url)
              .then((res) => res.json())
              .then((result) => {
                  setIsLoading(true);
                  setAvailableHotels(result);
              })
              .catch((error) => {
                  setIsLoading(false);
                  setError(error);
              });
  }, [destinationValue]);

  if (error) {
    return <div>error: {error.message}</div>;
  }

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header
        hotelData={destinationValue}
        setHotelData={handleDestinationChange}
        handleSearch={handleSearch}
      />
      <div className="container">
        {availableHotels && <Hotels hotels={availableHotels} title="Available hotels" />}

        {defaultHotels && <Hotels hotels={defaultHotels.slice(0, 4)} title="Homes guests loves" />}
      </div>
    </>
  );
}

export default App;
