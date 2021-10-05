import { Component } from 'react';
import PropTypes from 'prop-types';
import "./Buttons.scss";

class Number extends Component {
  render() {
    return (
      <div className="number" onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </div>
    );
  }
}

Number.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Number;
