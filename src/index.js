import ReactDom from "react-dom";
import React from "react";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { BrowserRouter as Router } from "react-router-dom";

import "./assets/_base.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
