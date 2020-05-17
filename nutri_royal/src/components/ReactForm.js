import React from 'react';

class controlledCompForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      age: '',
      gender: 
        {male: '', 
        female: '', 
        other: ''},
      occupation: ''
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
      username: '',
      password: '',
      age: '',
      gender: {male: '', female: '', other: ''},
      occupation: ''
    })

  } 
  

  render(){
  return (
    <div className="reactapp">
      
     <h1 className="title" >REACT BASE SIGN UP FORM</h1>

      {/* used onchange to call the function that will catch the event that updates the state when text is entered in the input boxes */}
      <form onChange={this.onInput} >         
        <div>
          <label>Username</label>
          <input type='text' name="username" />
        </div>

        <div>
          <label>Password</label>
          {/* 3. type passwrod hides the word you enter */}
          <input type='password' name="password" />
        </div>

        <div>
          <label>Age</label>
          <input type='text' name="age" />
        </div>


        <div>
          <label>Gender</label>
          <input type='text' name="gender" />
        </div>


        <div>
          <label>Occupation</label>
          <input type='text' name="occupation" />
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
