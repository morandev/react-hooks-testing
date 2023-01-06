import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
     <Router>
          {/* Router is higher order component hoc*/}
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
     </Router>
);

// D4WC2PP6C4DZXZ
