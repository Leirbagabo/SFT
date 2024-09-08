import "./Hero.scss";
import Mort from "../../assets/mort1.png";
import Aos from "aos";
import"aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
useEffect(()=>{
    Aos.init({duration:1000})
})


  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mort} alt="Hero" />
        </div>

        <div className="hero__right" data-aos="zoom-in-up">
          <h1>Servicios Funerarios Solo Faltas Tú</h1>
          <p>
          Usted solo  preocupese de despedir a su ser querido junto a los suyos.
          </p>
          <a href="#" className="btn">
            Saber más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
