import React from 'react';

class controlledCompForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Comment: '',
    }
  //bind this to control for the component
  this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    // (e.target.name, e.target.value);
    // I think this updates the states in the console
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e){
    // 2 .lets us see the values of whats submitted
    // 2. clear after obsubmit use -> this.setState( add empty key value pairs)
      // 
    // 2. this.props.onSubmit(this.state) --> shows user input in concole
    this.props.onSubmit(this.state)
    this.setState({
      Comment: ' ',
    })
 
  } 
  

  render(){
  return (
    <div className="reactapp">
      
     <h3 className="title" > Comments </h3>

      {/* used onchange to call the function that will catch the event that updates the state when text is entered in the input boxes */}
      <form onChange={this.onInput} >         

        <div>
          {/* 3. type passwrod hides the word you enter */}
          <textarea > </textarea>
          <label> Leave a Comment! </label>
        </div>

      </form>

    {/* added onClick calls this.onInput */}
    {/* the page doesn't auto refresh so I don't pass an event */}
    <button className='btn' onClick={() => this.onSubmit()}> {this.onSubmit} Display What You've Entered</button>    

   </div>
  );
}
}
export default controlledCompForm;
