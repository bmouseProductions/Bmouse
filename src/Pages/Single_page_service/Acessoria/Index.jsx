import React, { useEffect, useState } from "react";
import service14 from "../../../assets/service_14-2254ac07.webp";

const Acessoria = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Assessoria de Imprensa</span> {"  "}
        </h1>
      </div>
      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Networking e exposição de marca para as grandes massas ou público
          especializado fazem parte da nossa atividade. Utilizamos diversos
          mecanismos próprios para facilitar grandes negociações, posicionamento
          de mercado e valuation de marca.
        </p>
        <ul className="w-full flex justify-around py-10 my-5 text-lg sm:text-xl text-white">
          <div className="flex flex-col  sm:items-start">
            <li>
              • Consultoria de plano de mídia perante orçamento e objetivos;
            </li>
            <li>• Assessoria de imprensa especializada;</li>
            <li>• Negociação com veículos de comunicação especializados;</li>
            <li>• Materiais e planejamentos para feiras e convenções;</li>
            <li>
              • Criação de vinhetas para rádios e veículos especializados;
            </li>
            <li>• Destinação de verba para projetos de leis de incentivo;</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Acessoria;
