import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";
import "./Calculator.scss";

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
    negate: null
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      if (number === "." && !this.state.first)
        this.setState({ first: `0.` });
      else
        this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      if (number === "." && !this.state.second)
        this.setState({ first: `0.` });
      else
        this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  // I am not quite sure why Math.js was suggested in the section.
  // Vanilla parseFloat does the job well
  
  get first() {
    return parseFloat(this.state.first);
  }

  get second() {
    return parseFloat(this.state.second);
  }

  handleOperatorClick = (operator) => {
    if (operator === "-" && (!this.state.first || (this.state.first && this.state.operator && !this.state.second))) {
      const first = parseFloat(this.state.first);
      const second = parseFloat(this.state.second);
      if (!this.state.operator && !first) {
        this.setState({ first: `-` });
      } else if (!second) {
        this.setState({ second: `-` });
      }
    }
    else if (operator === "=") {
      if (this.state.operator === "+") {
        this.setState({ operator: null, first: this.first + this.second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: this.first / this.second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: this.first - this.second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: this.first * this.second, second: null });
      }
    } else if (operator === "clear") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <>
        <div className="calculator">
          <Screen value={this.getScreenValue()} />
          <div>
            <div className="keypad">
              <Number value={7} onClick={this.handleNumberClick} />
              <Number value={8} onClick={this.handleNumberClick} />
              <Number value={9} onClick={this.handleNumberClick} />
              <Number value={4} onClick={this.handleNumberClick} />
              <Number value={5} onClick={this.handleNumberClick} />
              <Number value={6} onClick={this.handleNumberClick} />
              <Number value={1} onClick={this.handleNumberClick} />
              <Number value={2} onClick={this.handleNumberClick} />
              <Number value={3} onClick={this.handleNumberClick} />
              <Number value={0} onClick={this.handleNumberClick} />
              <Number value="." onClick={this.handleNumberClick} />
            </div>
          </div>
          <div>
            <div className="operators">
              <Operator value="+" onClick={this.handleOperatorClick} />
              <Operator value="/" onClick={this.handleOperatorClick} />
              <Operator value="x" onClick={this.handleOperatorClick} />
              <Operator value="-" onClick={this.handleOperatorClick} />
              <Operator value="clear" onClick={this.handleOperatorClick} />
              <Operator className="equal" value="=" onClick={this.handleOperatorClick} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
