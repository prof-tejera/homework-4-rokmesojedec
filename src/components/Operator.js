import { Component } from 'react';
import "./Buttons.scss";
import PropTypes from 'prop-types';

class Operator extends Component {
  render() {
    return (
      <div className={["operator", this.props.className].join(" ")} onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </div>
    );
  }
}
Operator.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Operator;
