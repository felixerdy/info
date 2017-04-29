import React, { Component } from 'react';
import CircularImage from './Components/CircularImage.js'
import ListDetails from './Components/ListDetails.js'
import LifestylePhotoList from './Components/LifestylePhotoList.js'


import './style/App.css';

var interestsFile = require('./interests.json');
var workingWithFile = require('./working-with.json')

var lifestylePhotos = require('./lifestyle-photos.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <CircularImage path='./../Images/profile.jpg' />
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
        <div>
          <LifestylePhotoList lifestyleFile={lifestylePhotos}></LifestylePhotoList>
        </div>
      </div>
    );
  }
}

export default App;
