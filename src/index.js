import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Components
import App from "./components/App";
import styles from "./styles.css"; // eslint-disable-line

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
