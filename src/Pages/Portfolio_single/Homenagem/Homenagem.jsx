import React, { useEffect, useState } from "react";

const Homenagem = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Vídeo de Homenagem a Grande Colaborador do Grupo Patense:
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dZRwUyHAp3c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Esse vídeo ilustra bem o nosso DNA de contar histórias, pois sabemos o
          valor que cada uma tempo e dimensão que cada ação como essa toma em
          nossas vidas. Conseguimos através dessa ação resgatar para sempre a
          grande contribuição que o colaborador José Eduardo Borges Malheiro
          teve na trajetória da empresa, fazendo com que o vídeo se torne muito
          mais que um conteúdo para empresa e sim um patrimônio eterno.
        </p>
      </div>
    </div>
  );
};

export default Homenagem;
