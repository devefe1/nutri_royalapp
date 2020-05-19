import React from 'react';
import './App.css';

import Header from './Components/Header';
import Menu from './Components/Menu';
import Selection from './Components/Selection';
import Nutrition from './Components/Nutrition';
import Review from './Components/Review';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
        <div className="grid">
          <Selection />
          <Nutrition />
          <Review />
        </div>
    </div>
  );
}

export default App;
