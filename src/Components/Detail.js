import React, {Component} from 'react';
import './../style/InterestDetail.css';
import './../style/devicons.css';


class Detail extends Component {

  render() {
    if(this.props.cssClassName) {
      return (
        <div className="interest-detail">
          <div className={`${this.props.cssClassName} interest-icon`} />
          <h3>{ this.props.name }</h3>
        </div>
      );
    } else {
      return (
        <div className="interest-detail">
          <img src={this.props.icon} />
          <h3>{ this.props.name }</h3>
        </div>
      );
    }
  }
}

export default Detail;
