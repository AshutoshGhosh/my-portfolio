import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
// import { gsap } from "gsap";

function App() {
  // const timeline = gsap.timeline();
  // useEffect(() => {
  //   debugger;
  //   timeline.to("#gsap_animate", { y: "100vh", scale: 0.5, duration: 0.75 });
  //   timeline.to("#gsap_animate", { y: "30vh", duration: 1, delay: 1 });
  //   timeline.to("#gsap_animate", { y: "0vh",rotate: 360 + 360, scale: 1 , duration: 0.7});
  // }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
