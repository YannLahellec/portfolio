import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "./components/Navbar/NavBar";
import Title from "./components/Title/Title";
import Description from "./components/Description/Description";
import Projets from "./components/Projets/Projects";
import Competences from "./components/Competences/Competences";
import ContactForm from "./components/ContactForm/ContactForm";
import "./app.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <NavBar />
      <Title />
      <Description />
      <Projets />
      <Competences />
      <ContactForm />
    </>
  );
}

export default App;
