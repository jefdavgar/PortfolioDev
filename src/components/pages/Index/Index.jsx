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

const Index = () => {
  return (
    <>
      <a name="home"></a>
      <Menu></Menu>
      <section className="container">
        <div className="imagen_estrellas"></div>
        <div className="section_one">
          <div class="text-tittle">
            <h1>Jeferson Camero</h1>
            <h1>Full Stack Developer</h1>
            <h4>Passionate about programming and new technologies</h4>
            <ButtonOne text="Projects"></ButtonOne>
          </div>
          <div className="imagen_loco">
            <img
              src={gif}
              alt="your gif"
              style={{ height: "80%", width: "80%" }}
              className="gif_crazy"
            />
          </div>
        </div>
      </section>
      <a name="about"></a>
      <Container className="section_two">
        <div className="container d-flex flex-column align-items-center content_about">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <div className="imgtwo">
            <img
              src={giftwo}
              alt="your gif"
              style={{ width: "60%", borderRadius: "30%" }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center section_three">
            <h1>Skills</h1>
            <CarouselSkill></CarouselSkill>
        </div>
        <div className="d-flex flex-column align-items-center section_four container">
          <h1>Projects</h1>
          <>
            <CardProject></CardProject>
          </>
        </div>
      </Container>
    </>
  );
};

export default Index;
