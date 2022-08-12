import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Experience from "./Experience";

ReactDOM.render(
    <Router>
      <Routes>
    <Route path='/webdeploy' element={<App/>} />
    <Route path='/webdeploy/experience' element={<Experience/>} />
    </Routes>
    </Router>,
  document.getElementById("root")
);