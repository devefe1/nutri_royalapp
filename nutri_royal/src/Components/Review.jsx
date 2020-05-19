import React, { Component } from 'react';
import './styles/Review.css';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      act: 0,
      index: '',
      inputs: []
     };
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault()
    console.log('try');

    let inputs = this.state.inputs;
    let name = this.refs.name.value;

    if(this.state.act === 0){  //new
      let data = {
        name,
      }
      inputs.push(data);
    }else{                    //update
      let index = this.state.index;
      inputs[index].name = name;
    }

    this.setState({
      inputs: inputs,
      act: 0
    })


    this.refs.combox.reset(); 
    this.refs.combox.focus(); // makes the form able to re-focus and submit successfully ev
  }

  fRemove = (i) => {
    let inputs = this.state.inputs;
    //inputs.splice {i, 1}  <-- 1 separates each comment so that each comment gets deleted separately
    inputs.splice(i, 1);
    this.setState({
      inputs: inputs
    });
  }

  // .value targets the <ref> in the  
  fEdit = (i) => {
    let data = this.state.inputs[i];
    this.refs.name.value = data.name;

    this.setState({
      act: 1,
      index: i,
    })
  }


  render() {
    let inputs = this.state.inputs;
    return (
      <div className="CommentForm">
        <h2> Comments </h2>
        <form ref="combox" className="outer-comment-box">
          {/* the ref helps with the focus */}
          <textarea ref="name" placeholder="Add a comment.." className="inner-comment-box"> </textarea>
        </form>
          <button onClick={this.fSubmit} className="submit-button"> Post </button>

        <pre>
          {inputs.map((data, i) =>
          <li key={i} className="list-elements">
             {data.name}
            <button onClick={()=>this.fRemove(i)} className="remove-edit-buttons">remove </button>
            <button onClick={()=>this.fEdit(i)} className="remove-edit-buttons">edit </button>
          </li>
            )}
        </pre>

      </div>

    );
  }
}
export default Review;