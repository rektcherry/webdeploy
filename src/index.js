import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/reset.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Experience from "./experience";

ReactDOM.render(
    <Router>
      <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/experience' element={<Experience/>} />
    </Routes>
    </Router>,
  document.getElementById("root")
);

