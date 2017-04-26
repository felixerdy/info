import React, {Component} from 'react';
import './../style/ProfileImage.css'
// import zuck from 'zuck.js'; //currently not working

class ProfileImage extends Component {

  render() {
    return (
      <div>
        <img src={this.props.path} alt='Profile' className='profileImage'/>
      </div>
    );
  }
}

export default ProfileImage;
