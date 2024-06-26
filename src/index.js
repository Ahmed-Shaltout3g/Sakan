import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FilterProductsProvide from "./Context/FilterProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FilterProductsProvide>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FilterProductsProvide>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
