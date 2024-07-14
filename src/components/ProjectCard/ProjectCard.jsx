import PropTypes from "prop-types";
import {motion, useTransform} from "framer-motion"
import "./projectcard.css";

function ProjectCard({ i, title, description, image, link, color, progress, range, targetScale }) {
    const scale = useTransform(progress, range, [1, targetScale])

    const handleLink = () => {
      window.open(`${link}`, "_blank")
    }

  return (
    <div className="card-container">
      <motion.div  style={{scale, background: color, top:`calc(-10% + ${i * 25}px)` }} className="card">
        <span className="project-title-container">
           <h1>{title}</h1>
        </span>
        <section > 
          <p className="project-description">{description}</p>
          <div className="image-container">
            <div className="inner">
              <img src={image} alt="project image" className="project-img" onClick={handleLink} />
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  targetScale: PropTypes.number.isRequired,
};