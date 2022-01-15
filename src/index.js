import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import { BrowserRouter as Router } from "react-router-dom";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
