import React from "react";
import Carousel from "react-bootstrap/Carousel";
import html from "../../../assets/html5.png";
import css from "../../../assets/css.png";
import react from "../../../assets/react.png";
import js from "../../../assets/js.png";
import node from "../../../assets/node.png"
import git from "../../../assets/git.png"
import "./css/CarouselSkill.css";

const CarouselSkill = () => {
  return (
    <Carousel variant="light" indicators={false}>
      <Carousel.Item>
        <div className="container_img">
          <img
            className="d-block w-80 custom_img"
            src={html}
            alt="Third slide"
          />
        </div>
        <br />
        <Carousel.Caption>
          <h2>HTML 5</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container_img">
          <img
            className="d-block w-80 custom_img"
            src={css}
            alt="Third slide"
          />
        </div>
        <br />
        <Carousel.Caption>
          <h2>CSS</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container_img">
          <img
            className="d-block w-80 custom_img"
            src={react}
            alt="Third slide"
          />
        </div>
        <br />
        <Carousel.Caption>
          <h2>REACT JSX</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
        <div className="container_img">
          <img
            className="d-block w-80 custom_img"
            src={js}
            alt="Third slide"
          />
        </div>
        <br />
        <br />

        <Carousel.Caption>
          <h2>JAVASCRIPT</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container_img">
          <img
            className="d-block w-80 custom_img"
            src={node}
            alt="Third slide"
          />
        </div>
        <br />
        <br />
        <Carousel.Caption>
          <h2>NODE JS</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container_img">
          <img
            className="d-block w-80 custom_img"
            src={git}
            alt="Third slide"
          />
        </div>
        <br />
        <Carousel.Caption>
          <h2>GIT</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSkill;
