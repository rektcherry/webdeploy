import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.css";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Experience from "./Experience";

ReactDOM.render(
    <Router baseline="/">
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/experience' element={<Experience/>} />
    </Routes>
    </Router>,
  document.getElementById("root")
);