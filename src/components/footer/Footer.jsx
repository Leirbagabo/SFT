import "./Footer.scss";
import Logo from "../../assets/Logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="Logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            itaque
          </p>
        </div>
        <div className="footer__col">
          <h3>About</h3>
          <a href="#">About us</a>
          <a href="#">features</a>
          <a href="#">news</a>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">SFT </a>
          <a href="#">Aliados</a>
          <a href="#">Yoquese</a>
        </div>
        <div className="footer__col">
          <h3>Soporte</h3>
          <a href="#">FAQ</a>
          <a href="#">soporte</a>
          <a href="#">contactanos</a>
        </div>

        <div className="footer__col">
          <h3>redes sociales</h3>
          <div className="footer__icons">
            <a href="#" className="footer__icon">
              <FaFacebookF />
            </a>

            <a href="#" className="footer__icon">
              <FaInstagram />
            </a>

            <a href="#" className="footer__icon">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
