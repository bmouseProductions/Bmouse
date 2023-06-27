import React, { useEffect, useState } from "react";

const Casa = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Casa - Centro de Atenção à Saúde
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="mt-10 mx-auto max-w-4xl">
        <iframe
          className="w-full h-96 sm:h-120"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CmoZ0M9Z0gc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl">
          A Bmouse nasceu nos Estados Unidos, e o primeiro choque cultural que
          tivemos foi com a forma completamente diferente que cada um dos países
          valoriza os seus empreendedores. No Brasil, podemos constatar em quase
          todas as novelas o vilão sendo sempre um empreendedor com objetivo de
          sacanear a sociedade e nos Estados Unidos eles acabam se tornando
          filmes e inspiração para as pessoas.
        </p>

        <p
          className="my-5 text-lg sm:text-xl"
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Tinhamos uma idéia de criar um projeto chamado "Vida de Empreendedor"
          para contar histórias de vida marcantes nesse universo do nosso país.
          Essa ideia acabou mudando um pouco o formato e dando vida a um filme
          extraordinário das vidas de Carla Sarni e Cléber Soares, donos da
          maior rede de franquias odontológicas da América Latina. O filme foi
          um sucesso, veiculado na Band, Rede TV e SBT e protagonizado por
          Sidney Sampaio e Antonia Morais.
        </p>
      </div>
    </div>
  );
};

export default Casa;
