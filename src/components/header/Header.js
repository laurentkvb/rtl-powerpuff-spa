import React from 'react';
import "./header.scss"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/">{/*<Logo className="Header__logo" />*/}</a>
      </div>
    </header>
  );
};

export default Header;
