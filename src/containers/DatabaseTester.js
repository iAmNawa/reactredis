import React, { Component } from 'react';

import axios from '../redis-send.js';

class DatabaseTester extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('nameandage.json')
    .then( response => {
                console.log('sent')
            } )
            .catch( error => {
                console.log('error')
            } );
    console.log('nice job', this.state.name, this.state.age)
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
        <div>Name: {this.state.name}</div>
        <div>Age: {this.state.age}</div>
      </div>
    )
  }
}

export default DatabaseTester;
