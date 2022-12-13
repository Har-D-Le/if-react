import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputDestination from './InputDestination';

function Form({ data, setHotelData }) {
  const [destination, setDestination] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    setHotelData(destination);
  };
  return (
    <form className="desktop-form" action="/" method="GET" onSubmit={handleSubmit}>
      <InputDestination value={destination} onChange={(e) => setDestination(e.target.value)} />
      <div className="desktop-form-date-wrapper">
        <input className="date" id="check-in-date" type="date" name="date" />
        <label className="label-date-check-in" htmlFor="check-in-date">
          Check-in
        </label>
        <input className="date" id="check-out-date" type="date" name="date" />
        <label className="label-date-check-out" htmlFor="check-out-date">
          Check-out
        </label>
        <span className="dash">—</span>
      </div>
      <input
        className="rooms"
        id="rooms"
        type="text"
        name="rooms"
        value="2 Adults — 0 Children — 1 Room"
      />
      <button type="submit" className="search">
        Search
      </button>
    </form>
  );
}

Form.propTypes = {
  setHotelData: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Form;
