import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/banner";
import Pricing from "./components/pricing/Pricing";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Services />
      <Pricing />
      <Subscribe />
      <Footer/>
    </>
  );
}

export default App;
