import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Selectors from './Selectors';

function FilterPeople({ people, setPeople }) {
  const [adults, setAdults] = useState(people.adults);
  const [children, setChildren] = useState(people.children);
  const [rooms, setRooms] = useState(people.rooms);

  const [selectors, setSelectors] = useState([]);

  const [isDisabled, setDisabled] = useState({
    adultsBtnDec: true,
    adultsBtnInc: false,
    childrenBtnDec: true,
    childrenBtnInc: false,
    roomsBtnDec: true,
    roomsBtnInc: false
  });

  const addSelector = () => {
    setSelectors([...selectors, { id: Date.now() }]);
  }

  const removeSelector = () => {
    setSelectors(selectors.slice(1));
  }

  const handleAdultsDec = () => {
    setAdults((adults) => adults - 1);
  };

  const handleAdultsInc = () => {
    setAdults((adults) => adults + 1);
  };

  const handleChildrenDec = () => {
    setChildren((children) => children - 1);

    removeSelector();
  };

  const handleChildrenInc = () => {
    setChildren((children) => children + 1);

    addSelector();
  };

  const handleRoomsDec = () => {
    setRooms((rooms) => rooms - 1);
  };

  const handleRoomsInc = () => {
    setRooms((rooms) => rooms + 1);
  };

  useEffect(() => {
    if (adults <= 1) {
      setDisabled({ ...isDisabled, adultsBtnDec: true });
    } else if (adults >= 30) {
      setDisabled({ ...isDisabled, adultsBtnInc: true });
    } else if (adults >= 1 || adults <= 30) {
      setDisabled({ ...isDisabled, adultsBtnDec: false, adultsBtnInc: false });
    }

    setPeople({ ...people, adults });
  }, [adults]);

  useEffect(() => {
    if (children <= 0) {
      setDisabled({ ...isDisabled, childrenBtnDec: true });
    } else if (children >= 10) {
      setDisabled({ ...isDisabled, childrenBtnInc: true });
    } else if (children >= 1 || children <= 10) {
      setDisabled({
        ...isDisabled,
        childrenBtnDec: false,
        childrenBtnInc: false
      });
    }

    setPeople({ ...people, children });
  }, [children]);

  useEffect(() => {
    if (rooms <= 1) {
      setDisabled({ ...isDisabled, roomsBtnDec: true });
    } else if (rooms >= 30) {
      setDisabled({ ...isDisabled, roomsBtnInc: true });
    } else if (rooms >= 1 || rooms <= 30) {
      setDisabled({ ...isDisabled, roomsBtnDec: false, roomsBtnInc: false });
    }

    setPeople({ ...people, rooms });
  }, [rooms]);

  return (
    <div className="form-filter-people-focus">
      <div className="form-filter-div">
        <div className="filter-label-wrapper">
          <label className="filter-label" htmlFor="adults">Adults</label>
        </div>
        <div className="filter-btns-wrapper">
          <button
            disabled={isDisabled.adultsBtnDec}
            className={isDisabled.adultsBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={handleAdultsDec}
          >
            -
          </button>
          <input value={adults} id="adults" type="text" readOnly />
          <button
            disabled={isDisabled.adultsBtnInc}
            className={isDisabled.adultsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleAdultsInc}
          >
            +
          </button>
        </div>
      </div>
      <div className="form-filter-div">
        <div className="filter-label-wrapper">
          <label className="filter-label" htmlFor="children">Children</label>
        </div>
        <div className="filter-btns-wrapper">
          <button
            disabled={isDisabled.childrenBtnDec}
            className={isDisabled.childrenBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={handleChildrenDec}
          >
            -
          </button>
          <input value={children} id="children" type="text" readOnly />
          <button
            disabled={isDisabled.childrenBtnInc}
            className={isDisabled.childrenBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleChildrenInc}
          >
            +
          </button>
        </div>
      </div>
      <div className="form-filter-div">
        <div className="filter-label-wrapper">
          <label className="filte-label" htmlFor="rooms">Rooms</label>
        </div>
        <div className="filter-btns-wrapper">
          <button
            disabled={isDisabled.roomsBtnDec}
            className={isDisabled.roomsBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={handleRoomsDec}
          >
            -
          </button>
          <input value={rooms} id="rooms" type="text" readOnly />
          <button
            disabled={isDisabled.roomsBtnInc}
            className={isDisabled.roomsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleRoomsInc}
          >
            +
          </button>
        </div>
      </div>
      {selectors.length > 0 ? <Selectors selectors={selectors} /> : <> </>}
    </div>
  );
}

FilterPeople.propTypes = {
  setPeople: PropTypes.func,
  people: PropTypes.object
};
export default FilterPeople;
