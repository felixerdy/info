import React, {Component} from 'react';
import './../style/InterestDetail.css';
import './../style/devicons.css';


class InterestDetail extends Component {

  render() {
    return (
      <div className="interest-detail">
        <i className={`${this.props.cssClassName} interest-icon`} />
        <h3>{ this.props.name }</h3>
      </div>
    );
  }
}

export default InterestDetail;
