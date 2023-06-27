import React, { useEffect, useState } from "react";
const WHG = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">WHG - Testando </span> {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=L-GmVA9eY6E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Dentro do Grupo Patense, há várias marcas distintas, cada uma com sua
          identidade única e público-alvo específico. Reconhecendo essa
          diversidade, dedicamos esforços para criar conteúdos e linguagens
          diferenciadas, a fim de alcançar o público-alvo de cada marca e
          transmitir sua verdadeira identidade.
        </p>

        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Ao produzir vídeos institucionais para cada uma das marcas, nossa
          prioridade é respeitar essa diversidade e contar a história de cada
          uma de forma autêntica. Para isso, investimos em narrativas
          impactantes e inspiradoras, buscando criar um conteúdo audiovisual que
          capture a essência singular de cada marca.
        </p>
      </div>
    </div>
  );
};

export default WHG;
