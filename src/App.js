import {useRef} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const envVars = {
  emailKey: process.env.REACT_APP_EMAIL_KEY,
  tempKey: process.env.REACT_APP_TEMP,
  pubKey: process.env.REACT_APP_PUB,
};
const App = () => {

  

  const skillsRef = useRef(null);

  const handleScrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <Landing handleScrollToSkills={handleScrollToSkills}> </Landing>
      <Skills skillsRef={skillsRef}> </Skills>
      <Project> </Project>
      <Contact envVars={envVars}> </Contact>
    </>
  );
};

export default App;
