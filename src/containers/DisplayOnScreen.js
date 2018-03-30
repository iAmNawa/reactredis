import React, { Component } from 'react';

class DisplayOnScreen extends Component {
  constructor() {
    super();
    this.state = {
      information: ""
    }
  }

  getTheInfo = (e) => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', 'http://localhost:34564/userlist');
    request.responseType = 'text';

    request.onload = function() {
      //console.log(JSON.parse(request.response))
      this.setState({information: request.response})
    }.bind(this)
    request.send();
  }

  render() {
    return (
      <div>
        <button onClick={this.getTheInfo}>DISPLAY THAT</button>
        <div>{this.state.information}</div>
      </div>
    )
  }
}

export default DisplayOnScreen;
