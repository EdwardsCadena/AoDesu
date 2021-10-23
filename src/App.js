import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AoDesuApp from './router';
import SettingsCookies from './utils/cookies/SettingsCookies.js';

class App extends Component {
  render(){
    return (
      <Router>
        <SettingsCookies />
        <AoDesuApp />
      </Router>
    )
  }
}

export default App;
