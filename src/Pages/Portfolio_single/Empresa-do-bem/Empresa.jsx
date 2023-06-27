import React, { useEffect, useState } from "react";

const Empresa = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Campanha Patense – Uma Empresa Do Bem
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="mt-10 mx-auto max-w-4xl">
        <iframe
          className="w-full h-96 sm:h-120"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Oh3uwJl0v5s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          A Patense é a maior na indústria de rendering da América Latina e os
          seus valores utilizam a reciclagem animal para contribuir para um
          mundo mais sustentável. Apesar disso, boa parte das comunidades onde
          os centros industriais estão inseridos não compreendem a atividade e
          acabam passando desinformações sobre a empresa.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          O nosso trabalho foi divulgar e destacar o seu lado ecológico,
          valorizando que se trata de uma empresa do bem. Isso foi realizado
          através da união de bons conteúdos, estratégias criativas e inovadoras
          de divulgação, além da participação da belíssima cantora Tânia Mara
          que abrilhantou ainda mais esses conteúdos. Todos esses recursos
          fizeram da campanha um enorme sucesso, e assim transformamos os
          olhares sob a Patense.
        </p>
      </div>
    </div>
  );
};

export default Empresa;
