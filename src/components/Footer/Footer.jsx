import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="info">
      <div className="container">
        <svg className="footer-logo">
          <use href="#site-logo" />
        </svg>
        <div className="container-info">
          <ul className="content-info about">
            <li className="head-item-info">About</li>
            <li className="item-info">How Triphouse works</li>
            <li className="item-info">Careers</li>
            <li className="item-info">Privacy</li>
            <li className="item-info">Terms</li>
          </ul>
          <ul className="content-info property">
            <li className="head-item-info">Property types</li>
            <li className="item-info">Guest houses</li>
            <li className="item-info">Hotels</li>
            <li className="item-info">Apartments</li>
            <li className="item-info">Villas</li>
            <li className="item-info">Holiday homes</li>
            <li className="item-info">Hostels</li>
          </ul>
          <ul className="content-info support">
            <li className="head-item-info">Support</li>
            <li className="item-info">Contact Customer Service</li>
            <li className="item-info">FAQ</li>
          </ul>
        </div>
        <div className="footer">© 2020 Triphouse, Inc. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
