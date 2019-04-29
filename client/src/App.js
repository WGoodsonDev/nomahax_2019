import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import BasicMap from './map/index.js';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // call our fetch below once mounted
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI  = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };


  render() {
    return (
      <div className="App">
        <header className="BasicMap">
          <BasicMap />
        </header>
        <p className="App-Intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
