import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {

  return (
    <div>
      <Router>
        <NavBar> </NavBar>
        <Routes>
          <Route path="/" component={<Landing />} />
          <Route path="/projects" component={<Project />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
