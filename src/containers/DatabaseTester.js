import React, { Component } from 'react';

class DatabaseTester extends Component {

  consoleLogValue(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        Name:
       <input type="text" onChange={ this.consoleLogValue }></input>
        Age:
       <input type="number" onChange={ this.consoleLogValue }></input>
       <div></div>
      </div>
    )
  }
}

export default DatabaseTester;
