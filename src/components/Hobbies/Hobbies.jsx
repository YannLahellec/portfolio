import { useNavigate } from "react-router-dom";
import DiscoBall from "../../assets/icons/disco ball sans fond.png";
import "./hobbies.css";

function Hobbies () {
    const navigate = useNavigate();

    const HandleNavigate = () => {
        navigate("/hobbies")
    }

    return (
        <section className="hobby-section">
        <h1>MES CENTRES D'INTERET</h1>
        <img src={DiscoBall} alt="Icon" className="img-icon" onClick={HandleNavigate}/>
        </section>
    )
}

export default Hobbies;