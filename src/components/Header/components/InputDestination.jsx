import React from 'react';
import PropTypes from 'prop-types';

function InputDestination({ value, onChange, lableTransition }) {
  return (
    <>
      <input
        className="destination"
        id="destination"
        type="text"
        name="destination"
        value={value}
        onChange={onChange}
      />
      <label className="label-destination" htmlFor="destination">
        {lableTransition ? '' : 'Your destination or hotel name'}
      </label>
    </>
  );
}

InputDestination.propTypes = {
  lableTransition: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default InputDestination;
