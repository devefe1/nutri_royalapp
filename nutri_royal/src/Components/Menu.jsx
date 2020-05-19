import React from 'react';
// import './App.css';


function Menu() {
  return (
      <div className="menuContainer">
         <nav className="navBar">
           <div className="burgerMenu">
             <div className="line line1"></div>
             <div className="line line2"></div>
             <div className="line line3"></div>
           </div>

           <ul className= "navList">
             <li className="nav-item">
               <a href = "#" className="nav-link">CheeseBurger</a>
             </li>
             <li className="nav-item">
               <a href = "#" className="nav-link">Vegan Burger</a>
             </li>
             <li className="nav-item">
               <a href = "#" className="nav-link">Bacon Burger</a>
             </li>
             <li className="nav-item">
               <a href = "#" className="nav-link">Fries</a>
             </li>
           </ul>
         </nav>
      </div>
  );
}

export default Menu;


