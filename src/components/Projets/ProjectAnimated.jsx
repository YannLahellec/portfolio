import { projects } from "../../data";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import "./projectanimated.css";

function ProjectAnimated() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} id="projects">
      <h1 className="project-title">PROJETS</h1>
      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;
        return (
          <ProjectCard
            key={index}
            {...project}
            progress={scrollYProgress}
            i={index}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

export default ProjectAnimated;
