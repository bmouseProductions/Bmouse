import React from "react";
import "./test.css";
import mirian from "../assets/mirian gontijo.webp";
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

const Testimonials = () => {
  return (
    <div className="flex flex-wrap mx-2 justify-center mt-8 sm:mt-32 sm:flex-row z-30">
      <figure className="snip1574">
        <img
          src={mirian}
          alt="profile-sample2"
          className="h-full w-full object-cover"
        />
        <figcaption>
          <blockquote>
            <p>Visão do inicio</p>
          </blockquote>
          <h3>Mirian Gontijo</h3>
          <h5>Advogados</h5>
        </figcaption>
      </figure>
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
      <figure className="snip1574 ">
        <img
          src="https://tntsports.com.br/__export/1640607604881/sites/esporteinterativo/img/2021/12/27/marcelo.jpg"
          alt="profile-sample6"
          className="h-full w-full object-cover"
        />
        <figcaption>
          <blockquote>
            <p>O Sorriso e a Autoestima </p>
          </blockquote>
          <h3>Sorridents</h3>
          <h5>Marcelo 12</h5>
        </figcaption>
      </figure>
      <figure className="snip1574">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQpdG14coXd66-HKOVJcVXk99WyaPGP2OMg&usqp=CAU"
          alt="profile-sample6"
          className="h-full w-full object-cover"
        />
        <figcaption>
          <blockquote>
            <p>Sobrevivente</p>
          </blockquote>
          <h3>Gabriel</h3>
          <h5>o Pensador</h5>
        </figcaption>
      </figure>
      <figure className="snip1574">
        <img
          src={filmepate}
          alt="profile-sample6"
          className="h-full w-full object-cover"
        />
        <figcaption>
          <blockquote>
            <p>Pro dia nascer feliz </p>
          </blockquote>
          <h3>Paulo Ricardo</h3>
          <h5>do Grupo Patense</h5>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonials;
