import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function InputDate({ dates, setDates }) {
  const [startDate, setStartDate] = useState(dates.startDate);
  const [endDate, setEndDate] = useState(dates.endDate);

  const handleDateChange = (currentDates) => {
    const [start, end] = currentDates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    setDates({ ...dates, startDate });
  }, [startDate]);

  useEffect(() => {
    setDates({ ...dates, endDate });
  }, [endDate]);

  return (
    <div className="form-input-date">
      <label className="form-date-label" htmlFor="date">Check-in - Check-out </label>
      <DatePicker
        className="form-date"
        placeholderText="Check-in — Check-out"
        minDate={new Date()}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        id="date"
      />
    </div>
  );
}

InputDate.propTypes = {
  setDates: PropTypes.func,
  dates: PropTypes.object
};

export default InputDate;
