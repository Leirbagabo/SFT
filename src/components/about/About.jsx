import "./About.scss";
import Img from "../../assets/about.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="about" id="about">
      <div className="about__container wrapper">
        <div className="about__left" data-aos="fade-right">
          <img src={Img} alt="about" />
        </div>

        <div className="about__right" data-aos="zoom-in-up">
          <h2>¿Quienes somos?</h2>
          <p>
            Una empresa con nosecuantos4864años en el merK2 compuesta por un
            staff completamente profesional y capaz.
            <br />
            <br />
            contamos con todo el equipo necesario para brindar un servicio digno y de excelencia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
