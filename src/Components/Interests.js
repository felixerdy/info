import React, {Component} from 'react';
import './../style/Interests.css';
import InterestDetail from './InterestDetail.js'
var interestsFile = require('./../interests.json');

class Interests extends Component {


  render() {
    console.log(interestsFile)
    return (
      <div className="interests-background">
        <h1>My interests</h1>
        <hr width="100px;"></hr>
        {interestsFile.map((elem, index) => {
          return <InterestDetail key={index} name={elem.name} cssClassName={elem.cssClassName}></InterestDetail>
        })}


        <h1>Working with</h1>
        <hr width="100px;"></hr>
      </div>
    );
  }
}

export default Interests;
