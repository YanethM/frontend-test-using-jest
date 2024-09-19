import React, { useState } from "react";
import { Link } from "react-scroll";
import "./SidebarMenu.css";
import { DashboardOutlined, FolderShared } from "@mui/icons-material";

export const SidebarMenu = ({ activeSection, handleSetActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="slide-bar">
      <Link
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleSetActiveSection("section1")}>
        <div className={`icon ${activeSection === "section1" && "active"}`}>
          <DashboardOutlined />
        </div>
      </Link>
      <Link
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleSetActiveSection("section2")}>
        <div className={`icon ${activeSection === "section2" && "active"}`}>
          <FolderShared />
        </div>
      </Link>
      {/* CLIENTES */}
      <Link
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleSetActiveSection("section3")}>
        <div className={`icon ${activeSection === "section3" && "active"}`}>
          <DashboardOutlined />
        </div>
      </Link>
      {/* ALIADOS */}
      <Link
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleSetActiveSection("section4")}>
        <div className={`icon ${activeSection === "section4" && "active"}`}>
          <DashboardOutlined />
        </div>
      </Link>
      {/* PROYECTOS */}
      <Link
        to="section5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleSetActiveSection("section5")}>
        <div className={`icon ${activeSection === "section5" && "active"}`}>
          <DashboardOutlined />
        </div>
      </Link>

      {/* FUNDACIONES */}
      <Link
        to="section6"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleSetActiveSection("section6")}>
        <div className={`icon ${activeSection === "section6" && "active"}`}>
          <DashboardOutlined />
        </div>
      </Link>
      <div className="toggle-button" onClick={toggleSlideBar}>
        Menú
      </div>
    </div>
  );
};
