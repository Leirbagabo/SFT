import "./Pricing.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Pricing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pricing" id="pricing">
      <h2 data-aos="fade-up">Los mejores precios, prontopago y toda la ridiculez</h2>

      <div className="pricing__container wrapper">
        <div className="pricing__card" data-aos="fade-up">
          <img src="src\assets\icon-3.png" alt="#" />
          <h3>Velorio y entierro</h3>
          <span>100$</span>
          <a href="#" className="btn">
            Comprar ahora
          </a>
        </div>

        <div className="pricing__card" data-aos="fade-up">
          <img src="src\assets\icon-2.png" alt="#" />
          <h3>Cremación</h3>
          <span>150$</span>
          <a href="#" className="btn">
            Comprar ahora
          </a>
        </div>

        <div className="pricing__card" data-aos="fade-up">
          <img src="src\assets\icon-3.png" alt="#" />
          <h3>eutanasia + velorio + entierro o cremación</h3>
          <span>300$</span>
          <a href="#" className="btn">
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
