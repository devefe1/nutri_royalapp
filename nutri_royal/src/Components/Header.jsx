import React from 'react';
// import './App.css';

function Header() {
  return (
      <nav className="Header">
          <img id="logo" src="./../images/Nutriroyal.png"/>
          <ul id="NavBarBttns">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Logout</a></li>
          </ul>

      </nav>
  );
}

export default Header;
