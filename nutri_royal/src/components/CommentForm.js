import React from 'react';

class controlledCompForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      act: 0,
      index: '',
    }
  //bind this to control for the component
  this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    // (e.target.name, e.target.value);
    // I think this updates the states in the console

  }

  onSubmit(e){
    // 2 .lets us see the values of whats submitted
    // 2. clear after obsubmit use -> this.setState( add empty key value pairs)
      // 
    // 2. this.props.onSubmit(this.state) --> shows user input in concole
 
  } 
  

  render(){
  return (
    <div className="reactapp">
      
     <h3 className="title" > Comments </h3>
     <form ref="comment-form" className="comment-form">
      <textarea ref="comment" placeholder="Enter a comment.." className="text-field"></textarea>
     </form>

   </div>
  );
}
}
export default controlledCompForm;
