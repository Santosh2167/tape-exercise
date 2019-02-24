import React, { Component } from "react";
import "./EnquiryForm.css";

export default class EnquiryForm extends Component {

  onFormSubmit(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(req.body);
    let nameTextbox = document.querySelector(".nameTextbox").value;
    if (!nameTextbox.trim()) alert("name cannot be blank");
    console.log(nameTextbox.value);
    console.log("from on Form Submit");
  }
  render() {
    return (
      <form onSubmit={(event) => this.onFormSubmit(event)} className="enquiry-form">
        <div className="name">
          <label>Name</label>
          <input type="text" placeholder="Name" className="nameTextbox" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <input type="submit" value="Click" className="button"></input>
      </form >
    )
  }
}