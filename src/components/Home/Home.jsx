import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import '../App/App.css';
import Hotels from '../Hotels/Hotels';
import url from '../../constants/URL';

function Home({
  isLoading, setIsLoading, availableHotels, setError, error
}) {
  const [defaultHotels, setDefaultHotels] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}/popular`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setDefaultHotels(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={user ? 'container' : 'containerNone'}>
      {availableHotels && <Hotels hotels={availableHotels} title="Available hotels" />}

      {defaultHotels && <Hotels hotels={defaultHotels.slice(0, 4)} title="Homes guests loves" />}
    </div>
  );
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
  availableHotels: PropTypes.arrayOf(PropTypes.object),
  setError: PropTypes.func,
  error: PropTypes.string
};

export default Home;
