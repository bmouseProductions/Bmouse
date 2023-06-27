import React from "react";
import "./test.css";
import Button from "./Button";
import mirian from "../assets/doencas-inverno.webp";
import service2 from "../assets/pets-mellon-800x500.jpg";
import service3 from "../assets/experimenta2.png";
import service4 from "../assets/05-800x500.jpg";
import service6 from "../assets/Haras Nimbus de Prata.webp";
import service7 from "../assets/Sorriden - Pocahontas.png";
import service8 from "../assets/Foto-5-800x500.jpg";
import service9 from "../assets/casa-800x500.jpg";
import draelis from "../assets/Foto-7-800x500.jpg";
import service11 from "../assets/Foto-6-800x500.png";
import sorridents from "../assets/04-800x500.jpg";
import filmepate from "../assets/03-800x500.jpg";
import service14 from "../assets/Fotos-Servicos-08-1.png";
import leoni from "../assets/Leoni-com-Tania-Mara.jpg";
import ivete from "../assets/IVETE_3682.jpg";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <>
      <div className="text-center mt-32">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">Nossos Projetos </span> {"  "}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap mx-2 justify-center mt-8 sm:mt-32 sm:flex-row z-30">
        <a href="/mirian-gontijo">
          <figure className="snip1574">
            <img
              src={mirian}
              alt="profile-sample2"
              className="h-full w-full object-cover"
            />
            <figcaption>
              <blockquote>
                <p>Visão do início</p>
              </blockquote>
              <h3>Mirian Gontijo</h3>
              <h5>Advogados</h5>
            </figcaption>
          </figure>
        </a>
        <a href="/sorriso">
          <figure className="snip1574">
            <img
              src={sorridents}
              alt="profile-sample7"
              className="h-full w-full object-cover"
            />
            <figcaption>
              <blockquote>
                <p>Sorridents</p>
              </blockquote>
              <h3>A Força de </h3>
              <h5>Um Sorriso</h5>
            </figcaption>
          </figure>
        </a>
        <a href="/sem-limites-uma-historia-do-grupo-patense">
          <figure className="snip1574">
            <img
              src={filmepate}
              alt="profile-sample6"
              className="h-full w-full object-cover"
            />
            <figcaption>
              <blockquote>
                <p>Sem Limites </p>
              </blockquote>
              <h3>Uma História</h3>
              <h5>do Grupo Patense</h5>
            </figcaption>
          </figure>
        </a>
        <a href="/Dra">
          <figure className="snip1574">
            <img
              src={draelis}
              alt="profile-sample6"
              className="h-full w-full object-cover"
            />
            <figcaption>
              <blockquote>
                <p>Top 05 </p>
              </blockquote>
              <h3>Doenças no Inverno</h3>
              <h5>Dra. Elisângela</h5>
            </figcaption>
          </figure>
        </a>
        <a href="/leoni-alimentos">
          <figure className="snip1574">
            <img
              src={leoni}
              alt="profile-sample6"
              className="h-full w-full object-cover"
            />
            <figcaption>
              <blockquote>
                <p>O Melhor Sabor </p>
              </blockquote>
              <h3>no Menor Tempo</h3>
              <h5>Leoni Alimentos e Tânia Mara</h5>
            </figcaption>
          </figure>
        </a>
        <a href="/sorridentes">
          <figure className="snip1574">
            <img
              src={ivete}
              alt="profile-sample6"
              className="h-full w-full object-cover"
            />
            <figcaption>
              <blockquote>
                <p>Alegria</p>
              </blockquote>
              <h3>Sorridents</h3>
              <h5>Ivete Sangalo</h5>
            </figcaption>
          </figure>
        </a>
      </div>
      <div className="mx-auto flex justify-center mt-5">
        <Button text="Ver todos" link="/portfolio" />
      </div>
    </>
  );
};

export default Testimonials;
