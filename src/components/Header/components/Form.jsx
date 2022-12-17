import React, {useState} from 'react';
import PropTypes from 'prop-types';

import InputDestination from './InputDestination';

function Form({setHotelData}) {
    const [destination, setDestination] = useState('');

    const handleChange = (e) => setDestination(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setHotelData(destination);
        setDestination('');
    };

    return (
        <form className="desktop-form" action="/" method="GET" onSubmit={handleSubmit}>
            <InputDestination value={destination} onChange={handleChange}/>
            <div className="desktop-form-date-wrapper">
                <input className="date" id="check-in-date" type="date" name="date"/>
                <label className="label-date-check-in" htmlFor="check-in-date">
                    Check-in
                </label>
                <input className="date" id="check-out-date" type="date" name="date"/>
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
                readOnly
            />
            <button type="submit" className="search">
                Search
            </button>
        </form>
    );
}

Form.propTypes = {
    setHotelData: PropTypes.func,
};

export default Form;
