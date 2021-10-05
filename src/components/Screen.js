import { Component } from 'react';
import PropTypes from 'prop-types';
import "./Screen.scss";

class Screen extends Component {
  render() {
    return <div className="screen">{this.props.value}</div>;
  }
}
Screen.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}

export default Screen;
