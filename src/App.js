import {useRef} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";

 
const App = () => {
  const skillsRef = useRef(null);

  const handleScrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <>
      <NavBar />
      <Landing handleScrollToSkills={handleScrollToSkills} skillsRef={skillsRef}>
      </Landing>
    </>
  );
};

export default App;
