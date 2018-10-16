import React, { Component } from 'react';
import CONFIG from 'utils/config';

const ENV = process.env.NODE_ENV;

class App extends Component {
  componentDidMount() {
    console.log(`Environment: ${ENV}, Server Endpoint: ${CONFIG[ENV].SERVER_URL}`);
  }

  render() {
    return (
      <div className="container">
        Hello world
      </div>
    );
  }
}

export default App;
