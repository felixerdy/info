import React, {Component} from 'react';
import './../style/Interests.css';
import Detail from './Detail.js'
var Columns = require('react-columns');


class ListDetails extends Component {


  render() {
    return (
      <div>
        <Columns columns={5}>
            {this.props.techFile.map((elem, index) => {
                return <Detail key={index} name={elem.name} cssClassName={elem.cssClassName}></Detail>
            })}
        </Columns>
      </div>
    );
  }
}

export default ListDetails;
