import React from "react";
import Btn from "./Btn";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };
  }

  _changeNumber = (value) => {
    this.setState((prev) => {
      return { number: value };
    });
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>

        <Btn
          title="라이언"
          number={this.state.number}
          nextNumber={1}
          action={this._changeNumber}
          color="white"
        />

        <Btn
          title="어피치"
          number={this.state.number}
          nextNumber={2}
          action={this._changeNumber}
          color="pink"
        />

        <Btn
          title="무지"
          number={this.state.number}
          nextNumber={3}
          action={this._changeNumber}
          color="yellow"
        />

        <Btn
          title="콘"
          number={this.state.number}
          nextNumber={4}
          action={this._changeNumber}
          color="green"
        />

        <Btn
          title="콘"
          number={this.state.number}
          nextNumber={4}
          action={this._changeNumber}
          color="green"
        />

        {this.state.number === 1 && <div>라이언</div>}
        {this.state.number === 2 && <div>어피치</div>}
        {this.state.number === 3 && <div>무지</div>}
        {this.state.number === 4 && <div>콘</div>}
      </div>
    );
  }
}

export default App;
