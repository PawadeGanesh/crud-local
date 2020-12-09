import axios from "axios";

export const postAction = (submitdetails) => {
  console.log("submitdetails", submitdetails);
  return (dispatch) => {
    dispatch({ type: "REQUEST_POST_CUSTOMER" });

    axios
      .post("http://localhost:5000/crud/api/customer", submitdetails, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        dispatch(getAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FAIL_POST_CUSTOMER", isLoading: false });
      });
  };
};

export const getAction = () => {
  return (dispatch) => {
    dispatch({ type: "REQUEST_GET_CUSTOMER" });

    axios
      .get("http://localhost:5000/crud/api/customer")
      .then((res) => {
        console.log("GetAction", res.data);
        dispatch({ type: "RECEIVE_GET_CUSTOMER", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FAIL_GET_CUSTOMER", isLoading: false });
      });
  };
};

export const deleteAction = (id) => {
  console.log("DeleteId", id);
  return (dispatch) => {
    dispatch({ type: "REQUEST_DELETE_CUSTOMER" });

    axios
      .delete(`http://localhost:5000/crud/api/customer/${id}`)
      .then((res) => {
        dispatch(getAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getIdAction = (id) => {
  console.log("getID", id);
  return (dispatch) => {
    dispatch({ type: "REQUEST_GETID_CUSTOMER" });

    axios
      .get(`http://localhost:5000/crud/api/customer/${id}`)
      .then((res) => {
        console.log("GetAction", res.data);

        dispatch({ type: "RECEIVE_GETID_CUSTOMER", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FAIL_GETID_CUSTOMER", isLoading: false });
      });
  };
};

export const updateAction = (details) => {
  const id = this.props.match.params.id;
  console.log("update", id);
  return (dispatch) => {
    dispatch({ type: "REQUEST_UPDATE_CUSTOMER" });

    axios
      .put(`http://localhost:5000/crud/api/customer/${id}`, details, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        dispatch({ type: "RECEIVE_UPDATE_ACTION", payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: "FAIL_UPDATE_ACTION" });
        console.log(err);
      });
  };
};
