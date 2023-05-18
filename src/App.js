import { useRef, useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const skillsRef = useRef(null);
  const scrollOffset = 200;
  const [appLoaded, setAppLoaded] = useState(false);

  // Simulating a delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 200);
  }, []);

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
      {!appLoaded ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <Landing
            handleScrollToSkills={handleScroll}
            skillsRef={skillsRef}
          ></Landing>
        </>
      )}
    </>
  );
};

export default App;
