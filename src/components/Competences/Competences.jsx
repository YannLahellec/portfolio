import "./competences.css";
import { skills } from "../../data";

const Skill = ({ icon, title }) => (
  <div className="text-icon-container">
    <img src={icon} alt={title} className="icon-img" />
    <p>{title}</p>
  </div>
);

function Competences() {
  return (
    <>
      <section className="skills-container" id="skills">
        <h1>COMPETENCES</h1>
        <div className="icon-container">
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} />
          ))}
        </div>
        <section className="skills-txt-container">
          <p>
            J&rsquo;ai acquis des comp&eacute;tences solides en HTML5, CSS,
            JavaScript, React, MySQL, Express.js et Node.js &agrave; travers la
            r&eacute;alisation de trois projets distincts (le troisi&egrave;me
            &eacute;tant en cours de production). En plus de mes
            comp&eacute;tences techniques, j&#39;ai &eacute;galement une
            exp&eacute;rience pratique de la m&eacute;thode agile et Scrum, ce
            qui m&#39;a permis de travailler de mani&egrave;re efficace et
            collaborative au sein d&#39;&eacute;quipes. Ces exp&eacute;riences
            m&#39;ont permis de d&eacute;velopper une compr&eacute;hension
            approfondie des cycles de d&eacute;veloppement et de
            l&#39;importance de l&#39;am&eacute;lioration continue dans la
            livraison de produits de qualit&eacute;.
          </p>
        </section>
      </section>
    </>
  );
}

export default Competences;
