import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DatabaseTester from './containers/DatabaseTester';
import DatabaseTester2 from './containers/DatabaseTester2';
import DisplayOnScreen from './containers/DisplayOnScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<DatabaseTester />*/}
        <DatabaseTester2 />
      </div>
    );
  }
}

export default App;
