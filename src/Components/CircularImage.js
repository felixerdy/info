import React, {Component} from 'react';
import './../style/ProfileImage.css'
// import zuck from 'zuck.js'; //currently not working

class CircularImage extends Component {

  render() {
    return (
      <div>
        <img src={this.props.path} alt='Profile' className='profileImage'/>
      </div>
    );
  }
}

export default CircularImage;
