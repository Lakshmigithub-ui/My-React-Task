import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import InstaVideo from './components/InstaVideo';
// import ContactForm from './components/ContactForm';
import { BrowserRouter } from "react-router-dom";
import Routingconfig from "./components/RoutingConfig/Routingconfig";
import Menu from "./components/Menu/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu></Menu>
      <Routingconfig></Routingconfig>
    </BrowserRouter>

    {/* <App /> */}
    {/* <Home /> */}
    {/* <InstaVideo /> */}
    {/* <ContactForm /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
