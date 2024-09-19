import React, { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";
import { Link } from "react-router-dom";
import {image} from "../../assets";
import { WebHome } from "./sections/WebHome";
import { WebServices } from "./sections/WebServices";
import { WebClients } from "./sections/WebClients";
import { WebAliados } from "./sections/WebAliados";
import { WebCertifications } from "./sections/WebCertifications";
import { WebContactUs } from "./sections/WebContactUs";
import './Menu.css'

export const Menu = () => {
  const [activeSection, setActiveSection] = useState("services");
  const [showToggleButton, setShowToggleButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    setShowToggleButton(section !== "home");
    console.log("activeSection", activeSection);
    if (section !== "home") {
      return (
        <>
          <SidebarMenu />
        </>
      );
    } else {
      return null; // Si la sección es "section1", no renderizar los componentes
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  return (
    <div className="webmenu-page">
      {activeSection !== "home" || (
        <>
          <SidebarMenu />
        </>
      )}

      <div className="header">
        <div id="menuBar" className="menuBar">
          <div className="logo">
            <img src={image.profile_image} alt="logo" />
          </div>
          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <div className="navbar-toggle" onClick={toggleMenu}>
              ☰
            </div>
            <div className="navbar-options">
              <a href="#services" onClick={() => scrollToSection("section2")}>
                Servicios
              </a>
              <a href="#clients" onClick={() => scrollToSection("section3")}>
                Clientes
              </a>
              <a href="#projects" onClick={() => scrollToSection("section4")}>
                Aliados
              </a>
              <a href="#allies" onClick={() => scrollToSection("section5")}>
                Proyectos
              </a>
              <a
                href="#foundations"
                onClick={() => scrollToSection("section7")}>
                Actualidad
              </a>
              <a href="#contact" onClick={() => scrollToSection("section8")}>
                Contacto
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="home">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <SidebarMenu
        activeSection={activeSection}
        handleSetActiveSection={handleSetActiveSection}
      />
    </div>
  );
};

function Section1() {
  return (
    <div className="section" id="section1">
      <WebHome  />
    </div>
  );
}

function Section2() {
  return (
    <div className="section web-section" id="section2">
      <WebServices />
    </div>
  );
}

function Section3() {
  return (
    <div className="section web-section" id="section3">
      <WebClients/>
    </div>
  );
}

function Section4() {
  return (
    <div className="section web-section" id="section4">
      <WebAliados />
    </div>
  );
}

function Section5() {
  return (
    <div className="section web-section" id="section5">
      <WebCertifications />
    </div>
  );
}


function Section6() {
  return (
    <div className="section  web-final-section" id="section8">
      <WebContactUs />
    </div>
  );
}
