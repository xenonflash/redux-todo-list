import React, {Component} from 'react'

class AddTodo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  // state = {
  //   text: ''
  // }
  handleText(e){
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e) =>this.handleText(e)} value={this.state.text}/>
        <button onClick={() => {this.props.addTodo(this.state.text)}}>add todo</button>
      </div>
    );
  }
}

export default AddTodo