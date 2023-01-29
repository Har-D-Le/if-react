import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import '../App/App.css';
import Hotels from '../Hotels/Hotels';
import url from '../../constants/URL';
import { AuthContext } from '../../context/context';

function Home({
  isLoading, setIsLoading, availableHotels, setError, error
}) {
  const [defaultHotels, setDefaultHotels] = useState(null);
  const { isAuth } = useContext(AuthContext);

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
    <div className={isAuth ? 'container' : 'containerNone'}>
      {availableHotels && <Hotels hotels={availableHotels} title="Available hotels" />}

      {defaultHotels && <Hotels hotels={defaultHotels.slice(0, 4)} title="Homes guests loves" />}
    </div>
  );
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.bool,
  availableHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setError: PropTypes.func,
  error: PropTypes.string
};

export default Home;
