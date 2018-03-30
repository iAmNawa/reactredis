import React, { Component } from 'react';

class DisplayOnScreen extends Component {

  getTheInfo = (e) => {
    console.log('working button')
  }

  render() {
    return (
      <div>
        <div>Hello</div>
        <div>Hello again</div>
        <button onClick={this.getTheInfo}>DISPLAY THAT</button>
        <div></div>
      </div>
    )
  }
}

export default DisplayOnScreen;
