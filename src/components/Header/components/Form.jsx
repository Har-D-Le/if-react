import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputDestination from './InputDestination';
import InputDate from './InputDate';
import FilterPeople from './FilterPeople';
import InputPeople from './InputPeople';

function Form({ hotelData, setHotelData, handleSearch }) {
  const [destination, setDestination] = useState(hotelData);

  const [dates, setDates] = useState({ startDate: null, endDate: null });

  const [people, setPeople] = useState({
    adults: 1,
    children: 0,
    rooms: 1
  });

  const [filter, setFilter] = useState(false);

  const handleChange = (e) => setDestination(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHotelData(destination);
    setDestination('');
    handleSearch();
  };

  return (
    <form className="desktop-form" action="/" method="GET" onSubmit={handleSubmit}>
      <InputDestination
        lableTransition={destination !== ''}
        value={destination}
        onChange={handleChange}
      />
      <InputDate dates={dates} setDates={setDates} />
      <InputPeople
        value={people}
        onClick={() => {
          setFilter((filter) => !filter);
        }}
        onChange={(e) => setPeople(e.target.value)}
      />
      <button type="submit" className="search">
        Search
      </button>
      {filter && <FilterPeople people={people} setPeople={setPeople} />}
    </form>
  );
}

Form.propTypes = {
  handleSearch: PropTypes.func,
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string
};

export default Form;
