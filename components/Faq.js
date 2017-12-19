import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router';
import "../index.css";
import store from "../store";
import App from "../components/App";
import registerServiceWorker from "../registerServiceWorker";
import Provider from "/routes";
import User from './UserProfile';
//import { Router } from "../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router";

import Login from "../components/Login"; 
import Register from "../components/Register";

import { hashHistory } from 'react-router/lib/BrowserHistory';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="./UserProfile" component={User} /> //
        </Route>
    </Router>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
