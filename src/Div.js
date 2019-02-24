import React, { Component } from "react";


export default class Div extends Component {
  onClickButton() {
    console.log("this clicks");
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>Click</button>
      </div>
    )
  }
}