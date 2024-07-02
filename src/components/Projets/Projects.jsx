import WildGram from "../../assets/projets/wildgram.png";
import BrainBox from "../../assets/projets/brain box.png";
import RigolApp from "../../assets/projets/rigol.png";
import SoundWave from "../../assets/projets/soundwave.png";
import "./project.css";

function Projets() {
  
  return (
    <>
      <main className="all-container">
        <h1 className="project-title">PROJETS</h1>
        <div className="project-container">
          <article className="project-info">
            <div className="img-container">
              <img
                src={WildGram}
                alt="WildGram"
                className="project-img"
                onClick={() =>
                  window.open("https://wildgram-alpha.vercel.app/", "_blank")
                }
              />
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
            <div className="img-container">
              <img
                src={BrainBox}
                alt="BrainBox"
                className="project-img"
                onClick={() =>
                  window.open("https://brainbox-five.vercel.app/", "_blank")
                }
              />
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
            <div className="img-container">
              <img
                src={RigolApp}
                alt="RigolApp"
                className="project-img"
                onClick={() =>
                  window.open("https://rigol-app-psi.vercel.app/", "_blank")
                }
              />
            </div>
            <section className="txt-section">
              <h2>RigolApp</h2>
              <p>
                Projet lors du protojam sur une durée de 48h. Recherche du
                concept conception et creation de application{" "}
              </p>
            </section>
          </article>
          <article className="project-info">
            <div className="img-container">
              <img
                src={SoundWave}
                alt="WildGram"
                className="project-img"
                onClick={() =>
                  window.open(
                    "https://github.com/WildCodeSchool-2024-02/JS-Paris-BrainWaves-P3-Soundwave",
                    "_blank"
                  )
                }
              />
            </div>
            <section className="txt-section">
              <h2 className="reverse-txt">SoundWave</h2>
              <p className="reverse-txt">
                Projet Full Stack en (cours de production) sur une durée de 2
                mois. Ce projet est l'élabotation d'un site d'événemets pour les
                collectifs français afin de mettre en avant leurs projets.
                Utilisation de MySql, Node.js, Express.js, React, JavaScript,
                Css et Html.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Projets;
