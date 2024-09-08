import "./Services.scss";
import Sala from "../../assets/sala.jpg"; //solo de cambiar la imagen al final de la ruta
import Traslado from "../../assets/traslado.png";
import Pintacaritas from "../../assets/pintacaritas.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="services" id="services">
      <h2 data-aos="zoom-in-up">servicios</h2>
      <div className="services__container wrapper">
        <div className="services__left" data-aos="zoom-in-up">
          <h3>Salas Velatorias</h3>

          <p>Salas velatorias modernas con todas las comodidades necesarias.</p>
          <a href="#" className="btn">
            Saber más
          </a>
        </div>
        <div className="services__right" data-aos="fade-left">
          <img src={Sala} alt="Servicio1" />
        </div>
      </div>

      <div className="services__container wrapper">
        <div className="services__left" data-aos="zoom-in-up">
          <img src={Traslado} alt="Servicio1" />
        </div>
        <div className="services__right" data-aos="fade-left">
          <h3>Traslados</h3>
          <p>Traslados al interior y exterior del país. Repatriaciones.</p>
          <a href="#" className="btn">
            Saber más
          </a>
        </div>
      </div>

      <div className="services__container wrapper">
        <div className="services__left" data-aos="zoom-in-up">
          <h3>Pintacaritas</h3>

          <p>
            Si tú ser querido quedó feo para la foto, no te preocupes tenemos
            profesionales forenses y de maquillaje que te lo vuelve a ensamblar
          </p>
          <a href="#" className="btn">
            Saber más
          </a>
        </div>
        <div className="services__right" data-aos="fade-left">
          <img src={Pintacaritas} alt="Servicio1" />
        </div>
      </div>
    </section>
  );
}

export default Services;
