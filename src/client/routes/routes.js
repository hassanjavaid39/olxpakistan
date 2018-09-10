import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Dashboard from "../component/Dashboard";
import Message from "../component/Message";
import AllMessages from "../component/AllMessages";
import EditAd from "../component/EditAd";
import Home from "../component/Home";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import Categories from "../component/SubmitAd/Categories";
import Properties from "../component/SubmitAd/Properties/Properties";
import PropertiesView from "../component/SubmitAd/Properties/PropertiesView";
import ForSale from "../component/SubmitAd/Properties/ForSale";
import NewProjects from "../component/SubmitAd/Properties/NewProjects";
import ForRent from "../component/SubmitAd/Properties/ForRent";
export const history = createHistory();

export default class AppRoute extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/message/:id" component={Message} />
          <Route path="/messages/" component={AllMessages} />
          <Route path="/edit/:id" component={EditAd} />
          <Route path="/categories" component={Categories} />
          <Route path="/categories/properties/" component={Properties} />
          <Route path="/categories/properties/forrent" component={ForRent} />
          <Route path="/categories/properties/forsale" component={ForSale} />
          <Route path="/categories/properties/newprojects" component={NewProjects} />
          <Route path="/view/:id" component={PropertiesView} />
        </div>
      </Router>
    );
  }
}
