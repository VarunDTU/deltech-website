import React from "react";
import ReactDOM from "react-dom/client";
import PaymentPolicy from "./components/paymentPolicy";
import TermsConditions from "./components/termsConditions";
import IpRegistration from "./components/ipRegistration";
import DgRegistration from "./components/dgRegistration";
import Campus from "./components/campus";
import "./index.css";
import App from "./App";
import 'tw-elements';
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
        
    ),
  },
  {
    path: "paymentPolicy",
    element: <PaymentPolicy/>
    
  },
  {
    path: "termsConditions",
    element: <TermsConditions/>
    
  },
  {
    path: "ipRegistration",
    element: <IpRegistration/>
    
  },
  {
    path: "dgRegistration",
    element: <DgRegistration/>
    
  },
  {
    path:"CampusAmbassador",
    element:<Campus/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
