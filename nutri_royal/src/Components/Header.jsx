import React from 'react';
import Nutriroyal from './../images/Nutriroyal.png'

function Header() {
  return (
      <nav className="Header">
          <img id="logo" src={Nutriroyal} />
          <ul id="NavBarBttns">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Logout</a></li>
          </ul>

      </nav>
  );
}

export default Header;
