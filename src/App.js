import React, { Component } from 'react';
import ProfileImage from './Components/ProfileImage.js'
import ListDetails from './Components/ListDetails.js'

import './style/App.css';

import ProfilePicturePath from './Images/profile.jpg';
var interestsFile = require('./interests.json');
var workingWithFile = require('./working-with.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ProfileImage path={ProfilePicturePath} />
          <h1>&lt; Hey, I'm Felix &gt;</h1>
        </div>
        <div className="tech-details">
          <h1>My interests</h1>
          <hr width="100px;"></hr>
          <ListDetails techFile={interestsFile}></ListDetails>
          <h1>Working with</h1>
          <hr width="100px;"></hr>
          <ListDetails techFile={workingWithFile}></ListDetails>
        </div>
      </div>
    );
  }
}

export default App;
