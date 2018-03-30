import React, { Component } from 'react';

class DatabaseTester2 extends Component {
  constructor() {
    super();
    this.state = {
      one: null,
      two: null
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:34564/userlist');
    const data = await res.json();
    console.log(res)
    console.log(data)
  }

  render() {
    return (
      <div>
       <div>{this.state.one}</div>
       <div>{this.state.two}</div>
      </div>
    )
  }
}

export default DatabaseTester2;
