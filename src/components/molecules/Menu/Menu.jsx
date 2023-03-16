import React, { useState, useEffect } from "react";
import LinkOne from "../../atom/LinkOne/LinkOne";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import personal from "../../../assets/personal.png";
import ButtonDownload from "../../atom/ButtonDownload/ButtonDownload";
import "./css/Menu.css";

const Menu = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      className={scroll ? "Navbar-scroll" : "Navbar"}
      expand="lg"
      fixed="top"
    >
      <Container>
      <ButtonDownload text="Descargar CV" link="https://drive.google.com/uc?export=download&id=1OvcO3Ffh_kKGhE82GscqTY_xuEUh_3ZF" />
        <Navbar.Brand href="#home">
          <img src={personal} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className={scroll ? "custom-button-scroll": "custom-button"}
          aria-controls="basic-navbar-nav"
          onClick={toggle}
        />
        <Navbar.Collapse style={{ transition: 'height 1s' }} className={isOpen ? 'show' : ''} id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="menu">
            <Nav.Link href="#home">
              <LinkOne text="Inicio" />
            </Nav.Link>
            <Nav.Link href="#about">
              <LinkOne text="Sobre" />
            </Nav.Link>
            <Nav.Link href="#skill">
              <LinkOne text="Habilidades" />
            </Nav.Link>
            <Nav.Link href="#projets">
              <LinkOne text="Proyectos" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
