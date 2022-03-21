import React from "react";

class Btn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        style={{
          backgroundColor: this.props.color,
        }}
        onClick={() => this.props.action(this.props.nextNumber)}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Btn;
