// import React from "react";
// import Footers from "./components/CommonCss/footer/Footer";
// import Header from "./components/CommonCss/header/Header";
// import RoutePath from "./routes/RoutePath";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Footers />
//     </>
//   );
// };
// export default App;

import React from "react";

import "./App.css";

import Homepages from "./layout/Home/Homepages";
import Footers from "./components/CommonCss/footer/Footer";
import Header from "./components/CommonCss/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import SinglePage from "./layout/singlePage/singlePage";
import Culture from "./layout/culture/culture";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepages />} />
          <Route path="/singlepage/:id" exact element={<SinglePage />} />
          <Route exact path="/culture" element={<Culture />} />
        </Routes>
        <Footers />
      </Router>
    </>
  );
};

export default App;
