import "../Styles/description.css";
import ImageDesc from "../assets/img/photo_mrs 1.png";

function Description() {
  return (
    <>
      <div className="description-container">
        <h1 className="description-title">A PROPOS DE MOI</h1>
        <div className="info-container">
          <img src={ImageDesc} alt="" className="description-img" />
          <div className="text-container">
            <p className="txt-info">
              Né au Mexique et ayant eu l’opportunité de vivre dans différents
              pays je suis quelqu’un qui s’adapte très rapidement a de nouveaux
              environnements.
            </p>
            <p className="txt-info">
              {" "}
              Motivé et très autonome dans l’apprentissage je cherche a
              découvrir et apprendre en permanence.
            </p>
            <p className="txt-info">
              {" "}
              Suite à plusieurs années dans le Tourisme et en agence de voyage
              j'ai décidé de faire une reconversion professionnel dans un milieu
              qui me passionne depuis un certains temps qui est le développement
              Web.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
