import React from "react";
import Menu from "../../molecules/Menu/Menu";
import "./css/Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gif from "../../../assets/first_image.gif";
import giftwo from "../../../assets/second_image.gif";
import { Container } from "react-bootstrap";
import CarouselSkill from "../../molecules/CarouselSkill/CarouselSkill";
import ButtonOne from "../../atom/ButtonOne/ButtonOne";
import CardProject from "../../molecules/CardProject/CardProject";
import Contact from "../../organisms/Contact/Contact";

const Index = () => {
  return (
    <>
      <a name="inicio"></a>
      <Menu></Menu>
      <section className="container">
        <div className="imagen_estrellas"></div>
        <div className="section_one">
          <div class="text-tittle">
            <h1>Jeferson Camero</h1>
            <h1>Desarrollador Full Stack</h1>
            <h4>Apasionado por la programación y las nuevas tecnologías</h4>
            <ButtonOne text="Proyectos" linkTo="#proyectos" />
          </div>
          <div className="imagen_loco">
          <a name="sobre"></a>
            <img
              src={gif}
              alt="your gif"
              style={{ height: "80%", width: "80%" }}
              className="gif_crazy"
            />
          </div>
        </div>
      </section>
      <Container className="section_two">
        <div className="container d-flex flex-column align-items-center content_about">
          <h1>Sobre mi</h1>
          <p>
          Como desarrollador freelance, me destaco por mi autonomía, proactividad y responsabilidad. Tengo experiencia gestionando proyectos y desarrollando soluciones para clientes, siempre con un enfoque en la historia de usuario, calidad y la entrega en tiempo y forma.
          Me encanta el fútbol y la tecnología de desarrollo, y siempre busco mejorar mis habilidades en ambas áreas. Mi objetivo como desarrollador es utilizar mis habilidades técnicas y socioemocionales, para así construir soluciones innovadoras y creativas a los problemas.
          Siento una gran pasión por la tecnología y capacidad para impactar positivamente en el mundo. Como desarrollador, estoy comprometido a contribuir significativamente a esta transformación.
          </p>
          <a name="habilidades"></a>
          <div className="imgtwo">
            <img
              src={giftwo}
              alt="your gif"
              style={{ width: "60%", borderRadius: "30%" }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center section_three">
            <h1>Habilidades</h1>
            <CarouselSkill></CarouselSkill>
            <a name="proyectos"></a>
        </div>
        <div className="d-flex flex-column align-items-center section_four container">
          <h1>Proyectos</h1>
          <>
            <CardProject></CardProject>
          </>
          <a name="contacto"></a>
        </div>
        <Container className="section_contact">
        <div className="container d-flex flex-column align-items-center content_contact">
          <h1>Contacto</h1>
          <Contact/>
        </div>
      </Container>
      </Container>

    </>
  );
};

export default Index;
