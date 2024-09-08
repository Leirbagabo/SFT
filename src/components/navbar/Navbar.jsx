import "./Navbar.scss";
import Logo from "../../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>

        <ul className={`${showNav ? "show" : ""}`}>
          <li onClick={() => setShowNav(false)}>
            <a href="#about">Nosotros</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#services">Servicios</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#pricing">Precios</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#suscribe">contacto</a>
          </li>
        </ul>
        <div className="navbar__btns">
          <a href="#" className="btn">
            Cupón
          </a>
        </div>
        <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
