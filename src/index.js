import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Experience from "./Experience";

ReactDOM.render(
    <Router>
      <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/Experience' element={<Experience/>} />
    </Routes>
    </Router>,
  document.getElementById("root")
);

