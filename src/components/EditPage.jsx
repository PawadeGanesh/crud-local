import React, { Component } from "react";
import { connect } from "react-redux";
import { getIdAction, getAction, updateAction } from "../actions/index";

class Edit extends Component {
  state = {
    name: "",
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getIdAction(id);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillReceiveProps(nextProps) {
    const newName = nextProps.name;
    console.log("got new expert ", newName);
    this.setState({
      name: nextProps.name,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const originalName = this.props.name;
    // console.log("Expert before", originalName);
    // const updatedName = this.state.name;
    // console.log("Expert after", updatedName);

    // this.props.updateAction();
  };

  handleClick = () => {
    this.props.history.push("/dashboard");
    this.props.getAction();
  };

  render() {
    // const { name } = this.props;
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
            <button type="submit" className="btn btn-success btn-sm">
              Update
            </button>
            <button
              className="btn btn-success btn-sm"
              onClick={this.handleClick}
            >
              cancel
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    name: state.customerReducer.state,
  }),
  { getIdAction, getAction, updateAction }
)(Edit);
