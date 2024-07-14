import Css from "../../assets/icons/css3.png";
import Html from "../../assets/icons/html5.png";
import Js from "../../assets/icons/icons8-javascript-480.png";
import Sql from "../../assets/icons/mysql.png";
import Node from "../../assets/icons/nodejs.png";
import React from "../../assets/icons/react.png";
import Express from "../../assets/icons/express-icon.png"
import "./competences.css";

function Competences() {
  return (
    <>
      <section className="skills-container" id="skills">
        <h1>COMPETENCES</h1>
        <div className="icon-container">
          <div className="text-icon-container">
            <img src={Html} alt="icon" className="icon-img" />
            <p>Html</p>
          </div>
          <div className="text-icon-container">
            <img src={Css} alt="icon" className="icon-img" />
            <p>Css</p>
          </div>
          <div className="text-icon-container">
            <img src={Js} alt="icon" className="icon-img" />
            <p>JavaScript</p>
          </div>
          <div className="text-icon-container">
            <img src={Node} alt="icon" className="icon-img" />
            <p>Node.js</p>
          </div>
          <div className="text-icon-container">
            <img src={React} alt="icon" className="icon-img" />
            <p>React</p>
          </div>
          <div className="text-icon-container">
            <img src={Sql} alt="icon" className="icon-img" />
            <p>MySql</p>
          </div>
          <div className="text-icon-container">
            <img src={Express} alt="icon" className="icon-img" />
            <p>Express</p>
          </div>
        </div>
        <section className="skills-txt-container">
          
            <p>
              J&rsquo;ai acquis des comp&eacute;tences solides en HTML5, CSS,
              JavaScript, React, MySQL, Express.js et Node.js &agrave; travers
              la r&eacute;alisation de trois projets distincts (le
              troisi&egrave;me &eacute;tant en cours de production). En plus de
              mes comp&eacute;tences techniques, j&#39;ai &eacute;galement une
              exp&eacute;rience pratique de la m&eacute;thode agile et Scrum,
              ce qui m&#39;a permis de travailler de mani&egrave;re efficace et
              collaborative au sein d&#39;&eacute;quipes.
              Ces exp&eacute;riences m&#39;ont permis de d&eacute;velopper une
              compr&eacute;hension approfondie des cycles de
              d&eacute;veloppement et de l&#39;importance de
              l&#39;am&eacute;lioration continue dans la livraison de produits
              de qualit&eacute;.
            </p>
          
        </section>
      </section>
    </>
  );
}

export default Competences;
