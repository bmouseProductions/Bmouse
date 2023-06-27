import React, { useEffect, useState } from "react";
const Historia = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Sem Limites – Uma História do Grupo Patense{" "}
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FQBnjmSUIjw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          O documentário “Sem Limites – Uma História do Grupo Patense” foi
          filmado no ano de 2020, onde a história do crescimento da empresa é
          contada pelos seus sócios e colaboradores de uma maneira sincera e
          transparente.
        </p>

        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Ficha Técnica:
          <br />
          Diretor Artístico: Tom Gonçalves
          <br />
          Direção de Fotografia: Yam Griffo e Larissa Marques
          <br />
          Produção: Juan Arriagada
          <br />
          Edição: Rodrigo VB
          <br />
          Produção Executiva: Bmouse Productions
        </p>
      </div>
    </div>
  );
};

export default Historia;
