import "./description.css";
import ImageDesc from "../../assets/img/photo_mrs 1.png";

function Description() {
  return (
    <>
      <section className="description-container">
        <h1 className="description-title">A PROPOS DE MOI</h1>
        <div className="info-container">
          <img src={ImageDesc} alt="" className="description-img" />
          <div className="text-container">
            <p className="txt-info">
              Actuellement en reconversion professionnelle, en formation
              &agrave; la Wild Code School &agrave; Paris, je suis &agrave; la
              recherche d&rsquo;une alternance de 15 mois.
            </p>

            <p className="txt-info">
              {" "}
              Ant&eacute;rieurement agent de voyage, j&rsquo;ai
              d&eacute;velopp&eacute; un sens profond du service &agrave; la
              client&egrave;le. &Agrave; l&rsquo;&eacute;coute des besoins,
              j&rsquo;&eacute;tais responsable de cr&eacute;er sur mesure des
              voyages adapt&eacute;s &agrave; l&rsquo;offre de la destination.
              De plus, j&rsquo;ai d&eacute;montr&eacute; de la r&eacute;silience
              en p&eacute;riode de pand&eacute;mie et lors de la gestion de
              litiges.
            </p>

            <p className="txt-info">
              {" "}
              J&rsquo;ai aussi cr&eacute;&eacute; ma propre association musicale
              et label, ce qui m&rsquo;a permis de d&eacute;velopper une grande
              autonomie, une capacit&eacute; &agrave; r&eacute;soudre des
              probl&egrave;mes rapidement et une aptitude &agrave; travailler
              sous pression en &eacute;tant capable de mener &agrave; bout un
              projet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
