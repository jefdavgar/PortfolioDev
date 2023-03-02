import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import tingua_img from "../../../assets/img_carts/tingua.jpg"
import nft_img from "../../../assets/img_carts/nft.png"
import diorma_img from "../../../assets/img_carts/diorma.png"
import rick_img from "../../../assets/img_carts/rick.png"
import calculator_img from "../../../assets/img_carts/calculator.png"
import "./css/CardProject.css"
const CardProject = () => {
  const [projects] = useState([
    {
      id: 1,
      img: tingua_img,
      nameProject: "Tingua Project",
      linkG: "https://github.com/jefdavgar/Tingua_Project",
      LinkDep: "https://jefdavgar.github.io/Tingua_Project/",
    },
    {
      id: 2,
      img: nft_img,
      nameProject: "NFT Project",
      linkG: "https://github.com/jefdavgar/Page-nft",
      LinkDep: "https://jefdavgar.github.io/Page-nft/",
    },
    {
      id: 3,
      img: calculator_img,
      nameProject: "Calculator Project",
      linkG: "https://github.com/jefdavgar/Calculator",
      LinkDep: "https://jefdavgar.github.io/Calculator/",
    },
    {
      id: 4,
      img: rick_img,
      nameProject: "Rick and Morty",
      linkG: "https://github.com/jefdavgar/project-rick-and-morty",
      LinkDep: "https://project-rick-and-morty-5ybzvewma-jefdavgar.vercel.app/",
    },
    {
      id: 5,
      img: diorma_img,
      nameProject: "Ecommerce Diorma",
      linkG: "https://github.com/jefdavgar/project_diorma",
      LinkDep: "https://dancing-sunflower-c01e51.netlify.app/",
    },
  ]);
  return (
    <div className="cards">
      {projects.map((project) => (
        <CardP key={project.id} project={project} />
      ))}
    </div>
  );
};
const CardP = ({ project }) => {
  return (
    <Card>
      <Card.Img variant="top" src={project.img} />
      <Card.Body>
        <Card.Title>{project.nameProject}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={project.linkG}>Git-Hub</Card.Link>
        <Card.Link href={project.LinkDep}>Deployed</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default CardProject;
