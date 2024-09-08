import "./Banner.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Banner() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="banner">
      <div className="banner__container wrapper" data-aos="fade-up">
        <h1>No te deseo mal</h1>
        <h2>Solo espero que mi negocio prospere</h2>
      </div>
    </section>
  );
}

export default Banner;
