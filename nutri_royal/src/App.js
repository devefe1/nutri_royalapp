import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Selection from './components/Selection';
import Nutrition from './components/Nutrition';
import Review from './components/Review';
import foods from'./images/foods.jpg'



////////////////// API ////////////////API ////////////////API ////////////////API ////////////////API ////////////////

////////////////// API ////////////////API ////////////////API ////////////////API ////////////////API ////////////////

////////////////// API ////////////////API ////////////////API ////////////////API ////////////////API ////////////////
const API_Key = "d32f922814814864b0f43f2d55bc5a06";

class App extends Component{

  state={
    titles:[]
  }

  // state={
  //   info:[]
  // }

//  getinfo = async (e) => {
//   const calories= e.target.elements.calories.value;
//   e.preventDefault();
//   const fact = await fetch (`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${API_Key}&maxCalories=${calories}&number=1`)
//   const Nf= await fact.json();
//   // Nf= nutrition facts
//   console.log(Nf);
//   // this.setState({info.re})
//  } 

  getFacts= async (e)=> {
    const foodName = e.target.elements.foodName.value;
    e.preventDefault();
    const call = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_Key}&query=${foodName}&number=5`);
    // (`https://api.spoonacular.com/recipes/search?apiKey=${API_Key}`);
    // console.log(foodName)
    const result = await call.json();
    console.log(result)
    // console.log(result.results[0].title);
    this.setState({titles:result.results});
    // console.log(this.state.recipes);
  }
////////////////// API ////////////////API ////////////////API ////////////////API ////////////////API ////////////////

////////////////// API ////////////////API ////////////////API ////////////////API ////////////////API ////////////////

////////////////// API ////////////////API ////////////////API ////////////////API ////////////////API ////////////////


  render(){
  return (
    <div className="App">
      <Header />
      <Menu />
        <div className="grid">
          <Selection />
          <Nutrition getFacts={this.getFacts} titles= {this.state.titles} />
          <Review />
        </div>
    </div>
  );
}
}

export default App;