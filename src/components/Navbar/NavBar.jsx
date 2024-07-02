import { useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar () {
    const navigate = useNavigate();

return (
    <>
    <div className="navbar">
    <h1 className="nav-txt title" onClick={() => navigate("/")}>YANN LAHELLEC</h1>
    <ul className="nav-list">
        <li className="nav-txt">Projets</li>
        <li className="nav-txt">Compétences</li>
        <li className="nav-txt">Contact</li>
    </ul>
    </div>
    </>
)
}

export default NavBar;