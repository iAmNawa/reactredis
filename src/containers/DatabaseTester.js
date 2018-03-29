import React, { Component } from 'react';

class DatabaseTester extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: ""
    }
  }

  changeTheName = (e) => {
    console.log(e.target.value);
    this.setState({name: e.target.value})
  }

  changeTheAge = (e) => {
    console.log(e.target.value)
    this.setState({age: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
            <input type="text" onChange={ this.changeTheName }></input>
          <label>Age:</label>
            <input type="number" onChange={ this.changeTheAge }></input>
          <button>Send it</button>  
        </form>
        <div>{this.state.name}</div>
        <div>{this.state.age}</div>
      </div>
    )
  }
}

export default DatabaseTester;
