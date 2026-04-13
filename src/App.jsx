import { useState } from "react";
import Header from "./assets/components/Header";
import MobileMenu from "./assets/components/MobileMenu";
import Marquee from "./assets/components/Marquee";
import CourseCard from "./assets/components/CourseCard";
import Home from "./assets/pages/Home";
import Html from "./assets/pages/Html";
import Python from "./assets/pages/Python";
import Java from "./assets/pages/Java";
import Php from "./assets/pages/Php";

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "html": return <Html />;
      case "python": return <Python />;
      case "java": return <Java />;
      case "php": return <Php />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <Header setPage={setPage} toggleMenu={() => setMenuOpen(!menuOpen)} />
      <MobileMenu setPage={setPage} menuOpen={menuOpen} toggleMenu={() => setMenuOpen(false)} />
      <Marquee />
      <main>{renderPage()}</main>
    </>
  );
}

export default App;
