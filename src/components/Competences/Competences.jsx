import Css from "../../assets/icons/css3.png";
import Html from "../../assets/icons/html5.png";
import Js from "../../assets/icons/icons8-javascript-480.png";
import Sql from "../../assets/icons/mysql.png";
import Node from "../../assets/icons/nodejs.png";
import React from "../../assets/icons/react.png";
import "./competences.css";

function Competences() {
  return (
    <>
      <section className="skills-container">
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
        </div>
        <section className="skills-txt-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          pariatur, laboriosam atque repellat, laudantium repellendus sit
          impedit nostrum hic ex ad nesciunt deserunt sed sapiente. Alias
          accusamus delectus aspernatur laudantium? Rerum, eveniet. Praesentium
          iure, odio, assumenda accusamus maiores quo sequi doloremque omnis ex
          soluta, mollitia maxime incidunt dolor. Harum delectus voluptates
          praesentium vel quibusdam quos iste nesciunt aliquam itaque porro?
          Impedit voluptatum cum fugit voluptatibus quaerat consectetur
          cupiditate nostrum magni numquam! Dolores aliquam, error veritatis
          aspernatur unde sint placeat ipsum voluptatem delectus labore
          blanditiis exercitationem nobis. Laborum fugiat qui tempora.
          Cupiditate quod maiores, quo quisquam eos perspiciatis ipsa! Dolorum
          quas illo cupiditate, saepe placeat quidem repellendus eum aspernatur
        </p>
        </section>
      </section>
    </>
  );
}

export default Competences;
