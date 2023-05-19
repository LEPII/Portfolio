import { useRef, useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import LoadingScreen from "./components/LoadingScreen";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const skillsRef = useRef(null);
  const scrollOffset = 300;
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

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
