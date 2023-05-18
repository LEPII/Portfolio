import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";

const App = () => {
  const skillsRef = useRef(null);
  const scrollOffset = 200;

  const handleScroll = () => {
    const targetPosition =
      skillsRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      scrollOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />
      <Landing
        handleScrollToSkills={handleScroll}
        skillsRef={skillsRef}
      ></Landing>
    </>
  );
};

export default App;
