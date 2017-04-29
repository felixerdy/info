import React, {Component} from 'react';
import './../style/SquareImage.css'

class SquareImage extends Component {

  render() {
    return (
      <div className='image-container'>
        <h1 className='center bold'>{this.props.name}</h1>
        <img src={this.props.path} alt={this.props.name} className='square'/>
      </div>
    );
  }
}

export default SquareImage;
