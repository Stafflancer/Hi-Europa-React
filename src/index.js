import React from "react";
import ReactDOM from "react-dom";
import "./scss/style.scss";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
