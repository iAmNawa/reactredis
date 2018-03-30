import React, { Component } from 'react';

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
    console.log('nice job', this.state.name, this.state.age)

    var url = "http://localhost:34564/user";

    var data = {};
    data.firstname = this.state.name;
    data.lastname  = this.state.age;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      var user = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(user);
      } else {
        console.error(user);
      }
    }
    xhr.send(json);

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
