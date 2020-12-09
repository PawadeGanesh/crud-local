import React, { Component } from "react";
import { postAction } from "../actions/index";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.postAction(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button className="btn btn-success btn-sm">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { postAction })(Form);
