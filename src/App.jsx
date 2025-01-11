import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import FlowerCarousel from "./pages/FlowerCarousel";
import Gallery from "./pages/Gallery";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

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
