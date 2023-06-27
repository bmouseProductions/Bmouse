import React, { useEffect, useState } from "react";

const Pocah = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Sorriden – Pocahontas</span> {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          className="w-full h-96 sm:h-120"
          title="vimeo-player"
          src="https://player.vimeo.com/video/295927767?h=e29df82a02"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Durante essa campanha nós tivemos a honra de conhecer a história do
          casal que fundou esse império da indústria da beleza e do bem-estar
          que é a Sorriden, e, mais que isso, contamos a história deles de forma
          impecável.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          A campanha com a Pocah é uma das partes que compõem o sucesso
          alcançado.
        </p>
      </div>
    </div>
  );
};

export default Pocah;
