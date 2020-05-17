import ReactForm from './components/ReactForm';
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  state = {
    displayBoxInput: {}
  };
  // onsubmit shows user input in concole
  // console.log(`What the user just entered: ${displayBoxInput}`) --> what it says
    // this.setState(`${displayBoxInput}`) - and below renders to page

    onSubmit = displayBoxInput => { 
      this.setState({displayBoxInput})
     }

  render() { 
    return ( 
      <div>
        {/* //onSubmit=displaBoxIn... shows user input in concole */}
        {/* 2. inside of ptag will be an empty object and JSON stringify makes it looks "nice" */}
        <ReactForm onSubmit={displayBoxInput => this.onSubmit(displayBoxInput) }/>
          <p id="display-input" > {JSON.stringify(this.state.displayBoxInput, null, 2)}</p>
      </div>
     );
  }
}
 
export default App;     
