import React, { useEffect, useState } from "react";
import service_15 from "../../../assets/service_15-7fda3168.webp";

const Bmouse = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="px-20 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">
              Conheça os Studios BMouse
            </span>{" "}
            {"  "}
          </h1>
        </div>
        <div className="text-white text-left p-5 sm:p-10">
          <p className="my-5 text-lg sm:text-xl">
            A BMouse, além do seu vasto arsenal de equipamentos para produções
            audiovisuais, ainda conta com um set de filmagens completo. Dentro
            dos Studios BMouse você encontra tudo que é necessário para a
            realização da sua filmagem, edição e sonoplastia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">
              BMouse e a Seleção Brasileira
            </span>{" "}
            {"  "}
          </h1>
        </div>
        <div className="text-white text-left p-5 sm:p-10">
          <p className="my-5 text-lg sm:text-xl">
            Através de grandes projetos e parcerias, a BMouse é vendedora de
            diversos produtos esportivos relacionados ao futebol. Esta grande
            potência cultural brasileira abre infinitas possibilidades.
          </p>

          <ul className="w-full flex justify-around py-10 my-5 text-lg sm:text-xl text-white">
            <div>
              <li>• Patrocínio oficial da Seleção Brasileira;</li>
              <li>• Eliminatórias da Copa;</li>
              <li>• Campeonatos de Base do Futebol Brasileiro;</li>
              <li>
                • Patrocínio oficial de vários times do topo do nosso Brasil;
              </li>
              <li>• Patrocinador oficial do Maracanã;</li>
            </div>

            <div>
              <li>• Brindes;</li>
              <li>• Apresentações;</li>
              <li>• Catálogos;</li>
              <li>• Manuais;</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bmouse;
