import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="subscribe" id="suscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">
          Suscribete para fastidiarte a cada rato por comunidad de whatsApp y
          correos de madrugada
        </h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ullam
          distinctio aliquam voluptatem, temporibus asperiores debitis sed esse
          labore ducimus dolor quaerat eligendi adipisci quis accusamus. Eveniet
          beatae voluptatem illo?
        </p>
        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Ingrese su correo aquí" />
          <a href="#" className="btn">
            Suscribirse
          </a>
        </form>
      </div>
    </section>
  );
}
export default Subscribe;
