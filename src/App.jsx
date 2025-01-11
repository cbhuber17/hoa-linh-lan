import Contact from "./components/Contact";
import FlowerCarousel from "./components/FlowerCarousel";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FlowerCarousel />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
