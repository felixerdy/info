import React, { Component } from 'react';
import ProfileImage from './Components/ProfileImage.js'
import Interests from './Components/Interests.js'

import './style/App.css';

import ProfilePicturePath from './Images/profile.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ProfileImage path={ProfilePicturePath} />
          <h2>&lt; Felix &gt;</h2>
        </div>
        <p className="App-intro">
          Welcome to my page.
          <Interests />
        </p>
      </div>
    );
  }
}

export default App;
