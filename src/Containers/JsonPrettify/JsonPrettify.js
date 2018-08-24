import React, { Component } from "react";
import "./JsonPrettify.css";

// {
//     "Name": "Raghuram",
//      "Title": "Cool JS dev",
//     "City":"Chennai"
//   }
export default class JsonPrettify extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      textEntered: "",
      json_data: {
        Name: "Raghuram",
        Title: "Cool JS dev",
        City: "Chennai"
      }
    };
  }
  textAreaChanged = event => {
    console.log(event.target.value);
    const _textEntered = event.target.value;
    this.setState({ textEntered: _textEntered });
  };
  prettify = () => {
    try {
      const _json_data = JSON.parse(this.state.textEntered);
      this.setState({ json_data: _json_data });
    } catch (err) {
      console.log(err);
    }
  };
  preparecontent = () => {
    const keys = Object.keys(this.state.json_data);
    if (keys.length !== 0) {
      const listitems = keys.map(key => {
        return (
          <li key={key}>
            <span className="key-span">{key}</span> :{" "}
            <span className="value-span">{this.state.json_data[key]}</span>
          </li>
        );
      });
      return <ul className="final-display-list">{listitems}</ul>;
    } else {
      null;
    }
  };
  render() {
    return (
      <div className="app-container">
        <div className="app-Card app-background-card">
          <div className="app-Card">
            <textarea
              onChange={event => {
                this.textAreaChanged(event);
              }}
              className="input-text-area"
              rows={20}
              col={20}
            />
          </div>
          <div className="app-Card">
            <div className="output-div">{this.preparecontent()}</div>
          </div>
        </div>
        <div className="app-btn-wrapper">
          <button onClick={this.prettify} className="app-btn-primary">
            Prettify
          </button>
        </div>
      </div>
    );
  }
}
