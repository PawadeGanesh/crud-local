import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
// import DashBoard from './components/Dashboard';
const DashBoard = lazy(() => import("./components/Dashboard"));
// import Edit from "./components/EditPage";
const Edit = lazy(() => import("./components/EditPage"));
// import Form from "./components/NewForm";
const Form = lazy(() => import("./components/NewForm"));

const Loader = () => <div className="page-loader">Loading....</div>;

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/form" component={Form} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
