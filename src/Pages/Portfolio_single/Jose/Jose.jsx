import React, { useEffect, useState } from "react";

const Jose = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Patense 50 anos- José Borges Malheiros
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8DXVHWSiy40"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Muito mais que um simples depoimento, José Eduardo Malheiro é um
          exemplo de profissional brasileiro da mais alta qualidade. Sua
          presença nos impactou diretamente na tomada de grandiosas decisões, e
          é muito gratificante poder ouvir palavras dele nesse momento que o
          Brasil precisa tanto.
        </p>
      </div>
    </div>
  );
};

export default Jose;
