import CommentForm from './components/CommentForm';
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  state = {

  };
  // onsubmit shows user input in concole
  // console.log(`What the user just entered: ${displayBoxInput}`) --> what it says
    // this.setState(`${displayBoxInput}`) - and below renders to page

    onSubmit = () => { 

     }

  render() { 
    return ( 
      <div>
        {/* //onSubmit=displaBoxIn... shows user input in concole */}
        {/* 2. inside of ptag will be an empty object and JSON stringify makes it looks "nice" */}
        <CommentForm />
             
      </div>
     );
  }
}
 
export default App;     
