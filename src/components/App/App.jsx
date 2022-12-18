import React, { useState, useEffect } from 'react';
import './App.css';

import Hotels from '../Hotels/Hotels';
import Header from '../Header/Header';

function App() {
  const [destinationValue, setDestinationValue] = useState('');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [defaultHotels, setDefaultHotels] = useState(null);
  const [availableHotels, setAvailableHotels] = useState(null);

  const handleDestinationChange = (destination) => {
    setDestinationValue(destination);
  };

  useEffect(() => {
    fetch('https://if-student-api.onrender.com/api/hotels/popular')
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setDefaultHotels(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (destinationValue) {
      const url = new URL('https://if-student-api.onrender.com/api/hotels');
      url.searchParams.set('search', `${destinationValue}`);
      fetch(`${url}`)
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded(true);
          setAvailableHotels(result);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
        });
    }
  }, [destinationValue]);

  if (error) {
    return <div>error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header hotelData={destinationValue} setHotelData={handleDestinationChange} />
      <div className="container">
        {availableHotels && <Hotels hotels={availableHotels} title="Available hotels" />}

        {defaultHotels && <Hotels hotels={defaultHotels.slice(0, 4)} title="Homes guests loves" />}
      </div>
    </>
  );
}

export default App;
