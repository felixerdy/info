import React, {Component} from 'react';
import './../style/Interests.css';
import Detail from './Detail.js'
var Columns = require('react-columns');


class ListDetails extends Component {


  render() {
    var queries = [{
      columns: 3,
      query: 'min-width: 670px'
    }, {
      columns: 4,
      query: 'min-width: 1000px'
    }];
    return (
      <div>
        <Columns queries={queries}>
            {this.props.techFile.map((elem, index) => {
                return <Detail key={index} name={elem.name} cssClassName={elem.cssClassName}></Detail>
            })}
        </Columns>
      </div>
    );
  }
}

export default ListDetails;
