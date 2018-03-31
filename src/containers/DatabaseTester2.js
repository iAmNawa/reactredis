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
    console.log(data);
    var array =[];
    for (var prop in data) {
    data[prop].newprop = "newprop";
      console.log(data[prop])
    }
    console.log(data)
    data.map(x => array.push(`Hello I am ${x.name} and I am ${x.age} years old. `))
    this.setState({one: array})
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
