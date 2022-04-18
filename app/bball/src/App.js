import React, { Component } from 'react';
import SearchOp from './searchOp';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => {console.log(res); this.setState({ data: res.express });})
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    console.log("Response", response)
    const body = await response.json();

    console.log("Express Backend Connected");

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchOp/>
        </header>
      </div>
    );
  }
}

export default App;