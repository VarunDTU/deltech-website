import React from "react";
import ReactDOM from "react-dom/client";
import PaymentPolicy from "./components/paymentPolicy";
import TermsConditions from "./components/termsConditions";
import Campus from "./components/campus";
import "./index.css";
import App from "./App";
import 'tw-elements';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
  <Router>

    <App/>
  </Router>
  </React.StrictMode>
);
