import React, { Component } from "react";
import { connect } from "react-redux";
import { getAction, deleteAction } from "../actions";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getAction();
  }

  handleEdit = (id) => {
    console.log("ID", id);
    this.props.history.push(`edit/${id}`);
  };

  handleDelete = (id) => {
    this.props.deleteAction(id);
  };

  render() {
    const Data = this.props.newData;
    console.log("Data", Data);
    return (
      <div>
        <button
          className="btn btn-success btn-sm"
          onClick={() => this.props.history.push("/form")}
        >
          CreateNew
        </button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Data &&
              Data.map((eachRow, index) => {
                return (
                  <tr key={eachRow.id}>
                    <td>{index + 1}</td>
                    <td>{eachRow.name}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => this.handleEdit(eachRow._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(eachRow._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect((state) => ({ newData: state.customerReducer.state }), {
  getAction,
  deleteAction,
})(DashBoard);
