import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true)

  const handleBurgerMenu = () => {
    setOpenMenu(!openMenu);
  }

  const handleCloseMenu = () => {
    setOpenMenu(true)
  }

  return (
    <>

   
      <div className="navbar">
        <HashLink to="#title" style={{ textDecoration: "none" }}>
          <h1 className="nav-txt title" to onClick={() => navigate("/")}>
            YANN LAHELLEC
          </h1>
        </HashLink>
          <ul className={openMenu ? "nav-list active" : "nav-list" } >
            <HashLink to="#projects" style={{ textDecoration: "none" }} >
              <li className="nav-txt" onClick={handleCloseMenu} >Projets</li>
            </HashLink>
            <HashLink to="#skills" style={{ textDecoration: "none" }}>
              <li className="nav-txt" onClick={handleCloseMenu}>Compétences</li>
            </HashLink>
            <HashLink to="#contact" style={{ textDecoration: "none" }}>
              <li className="nav-txt"onClick={handleCloseMenu} >Contact</li>
            </HashLink>
          </ul>
          <div className="menu">
            <RxHamburgerMenu className="burger-menu" onClick={handleBurgerMenu}/>
          </div>
        </div>
      
    </>
  );
}

export default NavBar;
