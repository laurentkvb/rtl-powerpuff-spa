import React from 'react';
import './header.scss';

import header from '../../assets/header.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <img
            className="header__logo"
            src={header}
            alt="header-logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
