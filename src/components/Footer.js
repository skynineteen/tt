import React from 'react';

const Footer = () => {
  return (
    <footer className="section section--footer">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-list__item">
            <a href="#about">About us</a>
          </li>
          <li className="nav-list__item">
            <a href="#about">FAQ</a>
          </li>
          <li className="nav-list__item">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="nav-list__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
