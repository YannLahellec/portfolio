import { useState } from "react";
import WildGram from "../assets/projets/wildgram.png";
import BrainBox from "../assets/projets/brain box.png";
import RigolApp from "../assets/projets/rigol.png";
import "../Styles/project.css";

function Projets() {
  const [projectOne, setProjectOne] = useState(false);
  const [projectTwo, setProjecTwo] = useState(false);
  const [projectThree, setProjectThree] = useState(false);

  return (
    <>
      <main className="all-container">
        <h1 className="project-title">PROJETS</h1>
        <div className="project-container">
          <article className="project-info">
            <div
              onMouseOver={() => setProjectOne(true)}
              onMouseLeave={() => setProjectOne(false)}
              className="img-container"
            >
              <img src={WildGram} alt="WildGram" className="project-img" />
              {projectOne && (
                <button
                  className="project-btn"
                  onClick={() =>
                    window.open("https://wildgram-alpha.vercel.app/", "_blank")
                  }
                >
                  Live Project
                </button>
              )}
            </div>
            <section className="txt-section">
              <h2>WildGram</h2>
              <p>
                Premier projet réalisé dans le cadre de la formation au bout
                d’un mois. Création d’un site (desktop et responsive) statique
                en HTML, CSS avec l’implémentation de JavaScript (DOM)
              </p>
            </section>
          </article>
          <article className="project-info">
            <div
              onMouseOver={() => setProjecTwo(true)}
              onMouseLeave={() => setProjecTwo(false)}
              className="img-container"
            >
              <img src={BrainBox} alt="BrainBox" className="project-img" />
              {projectTwo && (
                <button
                  className="project-btn"
                  onClick={() =>
                    window.open("https://brainbox-five.vercel.app/", "_blank")
                  }
                >
                  Live Project
                </button>
              )}
            </div>
            <section className="txt-section">
              <h2 className="reverse-txt">BrainBox</h2>
              <p className="reverse-txt">
                Deuxième projet réalisé dans le cadre de la formation sur une
                durée de 3 semaines. Création d’un site de jeu de quizz
                interactif (desktop et responsive) avec React, HTML, CSS et
                JavaScript.
              </p>
            </section>
          </article>
          <article className="project-info">
            <div
              onMouseOver={() => setProjectThree(true)}
              onMouseLeave={() => setProjectThree(false)}
              className="img-container"
            >
              <img src={RigolApp} alt="RigolApp" className="project-img" />
              {projectThree && (
                <button
                  className="project-btn"
                  onClick={() =>
                    window.open("https://rigol-app-psi.vercel.app/", "_blank")
                  }
                >
                  Live Project
                </button>
              )}
            </div>
            <section className="txt-section">
              <h2>RigolApp</h2>
              <p>
                Projet lors du protojam sur une durée de 48h. Recherche du
                concept conception et creation de application{" "}
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Projets;
