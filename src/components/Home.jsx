import { Hero } from "./Hero.jsx";
import { About } from "./About.jsx";
import { Projects } from "./Projects.jsx";
import { Skills } from "./Skills.jsx";

export const Home = () => {
  return (
    <>
      <Hero />
      <Projects home={true} quantity={"3"} />
      <About />
      <Skills />
    </>
  );
};
