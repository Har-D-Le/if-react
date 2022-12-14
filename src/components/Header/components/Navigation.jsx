import React from 'react';
import { logo, dayNight, accountCircle } from '../../../../public/images';

function Navigation() {
  return (
    <header className="header-site">
      <img src={logo} alt="triphouse icon" className="site-logo" />
      <nav className="header-site-navigation">
        <a href="/" className="nav-item-1">
          Stays
        </a>
        <a href="/" className="nav-item-2">
          Attractions{' '}
        </a>
        <a href="/" className="link-nav-day-night">
          <img src={dayNight} alt="day amd night icon" className="nav-day-night" />
        </a>
        <a href="/" className="link-nav_account_circle">
          <img src={accountCircle} alt="account icon" className="nav_account_circle" />
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
