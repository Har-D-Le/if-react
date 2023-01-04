import React from 'react';
import PropTypes from 'prop-types';

function InputPeople({ value, onClick }) {
  return (
    <div className="form-wrapper-people" onClick={onClick} onKeyPress={onClick} role="presentation">
      <input
        className="form-input-people"
        type="text"
        placeholder={`${value.adults}` + ' ' + 'Adults'}
      />
      <input
        className="form-input-people"
        type="text"
        placeholder={`${value.children}` + ' ' + 'Children'}
      />
      <input
        className="form-input-people"
        type="text"
        placeholder={`${value.rooms}` + ' ' + 'Room'}
      />
    </div>
  );
}

InputPeople.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func
};

export default InputPeople;
