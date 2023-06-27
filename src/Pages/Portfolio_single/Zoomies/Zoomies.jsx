import React, { useEffect, useState } from "react";
const Zoomies = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Vídeos comerciais da Zoomies{" "}
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=zMUiskeQ1sI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          A Zoomies vai além de ser uma marca que oferece produtos de qualidade
          para os pets. Ela incorpora a criatividade e a arte em cada uma de
          suas embalagens. Seguindo essa mesma essência, aplicamos esses
          elementos aos vídeos comerciais de cada produto. Nosso objetivo
          principal foi demonstrar como cada linha da Zoomies pode beneficiar os
          pets em seu cotidiano.
        </p>

        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Por meio de roteiros divertidos e uma produção audiovisual de
          excelência, buscamos transmitir de maneira descontraída a importância
          de cada produto e como eles foram cuidadosamente desenvolvidos para
          proporcionar o melhor para nossos amigos de quatro patas. Além disso,
          utilizamos elementos de cores vibrantes e efeitos visuais que remetem
          à arte que a marca representa, tornando cada vídeo uma experiência
          visual envolvente e cativante.
        </p>
      </div>
    </div>
  );
};

export default Zoomies;
