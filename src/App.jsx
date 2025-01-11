import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import FlowerCarousel from "./components/FlowerCarousel";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FlowerCarousel />
              <Gallery />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
