import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Api from "./Api";
import App from "./App";
import ApiProvider from "./Api";
import "./index.css";
import Discover from "./layout/Home/Discover/Discover";
import Footers from "./components/CommonCss/footer/Footer";
import Header from "./components/CommonCss/header/Header";
import Ppost from "./layout/Home/mainContent/Ppost/Ppost";
import Popular from "./layout/Home/mainContent/popular/popular";
import Hero from "./layout/Home/Hero/Hero";
// import Hero from "./layout/Home/Hero/Hero";
// import { AuthProvider } from "./provider/AuthProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
