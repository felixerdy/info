import React, {Component} from 'react';
var Columns = require('react-columns');

import SquareImage from './SquareImage.js'


class LifestylePhotoList extends Component {
  render() {
    var queries = [{
      columns: 2,
      query: 'min-width: 670px'
    }, {
      columns: 3,
      query: 'min-width: 1000px'
    }];
    return (
      <div>
        <Columns queries={queries}>
            {this.props.lifestyleFile.map((elem, index) => {
              return <SquareImage path={elem.imageSquare} key={index} name={elem.name}></SquareImage>
            })}
        </Columns>
      </div>
    );
  }
}

export default LifestylePhotoList;
