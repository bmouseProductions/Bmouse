import React, { useEffect, useState } from "react";
import pets from "../../../assets/SIMULACAO-Administrativo.jpeg";

const PetsMellon = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Campanha Pets Mellon</span> {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <img src={pets} />
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Mais uma marca do renomado Grupo Patense, a Pets Mellon é uma copacker
          de produtos relacionados a alimentação animal no Brasil e no mundo,
          produzindo para diversas marcas do topo do mercado mundial. A campanha
          foi criada para trabalhar forte o lado institucional da marca e
          apresentar aos quatro cantos do mundo o poder industrial que a unidade
          situada em Votuporanga tinham.
        </p>

        <p className="my-5 text-lg sm:text-xl">
          Nessa campanha contamos com colaboradores de Bangladesh para chegarmos
          nas ilustrações que deram vida ao kv dessa unidade. A Pets Mellon se
          tornou referência de marketing no mercado e a campanha ajudou a
          empresa a se posicionar de maneira épica como uma das maiores do
          mercado.
        </p>
      </div>
    </div>
  );
};

export default PetsMellon;
