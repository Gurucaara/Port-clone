import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import PortfolioTwo from "./components/PortfolioTwo";
const App = () => {
  return (
    <div className="text-sm">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <PortfolioTwo />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
};
export default App;
