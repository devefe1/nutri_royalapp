import CommentForm from './components/CommentForm';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="App">
        <CommentForm />
      </div>

    );
  }
}

export default App;