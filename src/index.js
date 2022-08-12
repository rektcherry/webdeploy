import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.css";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Experience from "./Experience";

ReactDOM.render(
    <Router basename="/webdeploy">
    <Route exact path='/' component={<App/>} />
    <Route exact path='/experience' component={<Experience/>} />
    </Router>,
  document.getElementById("root")
);