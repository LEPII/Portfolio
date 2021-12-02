import "./App.css";
import Landing from "./pages/Landing";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div>
      <Landing> </Landing>
      <Project > </Project>
      <Skills> </Skills>
      {/* <Personal> </Personal> */}
      <Contact> </Contact>
    </div>
  );
};

export default App;
