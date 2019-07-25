import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Components
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
