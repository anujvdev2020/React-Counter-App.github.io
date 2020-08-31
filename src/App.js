import React from "react";
import "./styles.css";
import Display from "./Display";
import Changebutton from "./Changebutton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(sign) {
    if (sign === "+") {
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1
        };
      });
    } else if (sign === "-") {
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Counter</h1>
        </div>
        <Display counterValue={this.state.counter} />
        <Changebutton handleClick={this.handleChange} />
      </div>
    );
  }
}
