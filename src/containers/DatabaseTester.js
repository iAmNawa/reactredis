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
    data.name = this.state.name;
    data.age  = this.state.age;
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

  sendItQueryString = (event) => {
    event.preventDefault();
    console.log('nice job', this.state.name, this.state.age)

    var url = "http://localhost:34564/?name=paul&age=30";

    //var data = {};
    //data.name = this.state.name;
    //data.age  = this.state.age;
    //var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      var user = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(user);
      } else {
        console.error(user);
      }
    }
    xhr.send(url);
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
          <button>Send it JSON</button>
        </form>
        <div>Name: {this.state.name}</div>
        <div>Age: {this.state.age}</div>
        <button onClick={ this.sendItQueryString }>Send it query string</button>
      </div>
    )
  }
}

export default DatabaseTester;
