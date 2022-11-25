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
import ReferenceDataContextProvider from "./ReferenceDataContext/ReferenceDataContext";
// import Login from "./layout/login";
import Login from "./Login";
import Modal from "./layout/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ReferenceDataContextProvider>
      <App />
    </ReferenceDataContextProvider>
  </BrowserRouter>
);
