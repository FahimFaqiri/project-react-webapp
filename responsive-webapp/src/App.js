import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <Router>
      {/* add the navbar components from the components folder */}
      <Navbar />
      {/* switch looks for a match and then stop looking */}
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
