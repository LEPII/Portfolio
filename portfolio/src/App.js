import React, { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";

const App = () => {
  const buttonRef = useRef();
  const handleClick = () => {
    buttonRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
 <NavBar> </NavBar>
      <Landing handleClick={handleClick}></Landing>
      <Project buttonRef={buttonRef}></Project>
      <Skills> </Skills>
      <Personal> </Personal>
      <Contact> </Contact>
    </div>
  );
};

export default App;
