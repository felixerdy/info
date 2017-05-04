import React, {Component} from 'react';
import CircularImage from './Components/CircularImage.js'
import ListDetails from './Components/ListDetails.js'
import LifestylePhotoList from './Components/LifestylePhotoList.js'
var Columns = require('react-columns');
import Detail from './Components/Detail.js'

import './style/App.css';

var interestsFile = require('./interests.json');
var workingWithFile = require('./working-with.json')

var lifestylePhotos = require('./lifestyle-photos.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <CircularImage path='./Images/profile.jpg'/>
          <h1>&lt; Hey, I'm Felix &gt;</h1>
        </div>
        <div className="about-me">
          <h1>About me</h1>
          <hr width="100px;"></hr>
          <p>
            Hey, I am Felix and I am living in <a href="https://www.google.de/maps/place/Münster">Münster, Germany 🚲🌧️</a>. I am studying Geoinformatics 🌍💻 at the <a href="https://www.uni-muenster.de/Geoinformatics/en/">Institute for Geoinformatics</a>. Besides that, I am working in the <a href="https://sensebox.de/en/">senseBox</a> team, where I work on a new website, on Arduino projects or do workshops with school kids. I like to work on frontend projects but I am also interested in backend technologies.
          </p>
          <p>
            In my freetime I enjoy <a href="https://skylines.aero/users/999">gliding ✈️</a>, riding my bicycle 🚲 or exploring new things.
          </p>
          <Columns columns={2}>
            <a href="https://github.com/felixerdy" className="contact-icon">
              <div className="devicons devicons-github_badge"></div>
            </a>
            <a href="mailto:felixaetem@googlemail.com" className="contact-icon">
              <img src="./Images/mail.svg"></img>
            </a>
          </Columns>
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
