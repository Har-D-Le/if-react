import React from 'react';
import PropTypes from 'prop-types';

function InputDestination({ value, onChange}) {
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
        { value !== '' ? '' : 'Your destination or hotel name'}
      </label>
    </>
  );
}

InputDestination.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default InputDestination;
