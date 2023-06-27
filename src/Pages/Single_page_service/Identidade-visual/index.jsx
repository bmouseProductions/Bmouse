import React, { useEffect, useState } from "react";
import service_15 from "../../../assets/service_1-5a8f99d1.webp";

const Identidade = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Planejamento estratégico</span> {"  "}
        </h1>
      </div>
      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl">
          A estética importa muito, mas credibilizar uma marca e atrair o
          público vai muito além da arte veiculada nas ruas ou de um feed
          visualmente agradável. Decisões estratégicas são necessárias no
          planejamento para que o sucesso da campanha seja alcançado, e nisso
          nós também podemos ajudar.
        </p>
        <ul className="w-full flex flex-col sm:flex-row justify-between py-10 my-5 text-lg sm:text-xl text-white">
          <div className="flex-1">
            <li>Planejamento anual de campanha;</li>
            <li>Calendário de postagens;</li>
            <li>Criação de endomarketing mensal;</li>
            <li>
              Criação das campanhas de ads <br />
              (impulsionamento pago nas redes sociais);
            </li>
            <li>
              Criação de estratégia de mídia paga <br /> (Jornais, TV, Rádios,
              Blogs);
            </li>
            <li>Escolha de influenciador digital;</li>

            <li>Definição de público-alvo;</li>
            <li>Valuation de Marca;</li>
            <li>Relatório de desenvolvimento de campanha mensal;</li>
            <li>Estratégias voltadas para segurança do trabalho e LGPD;</li>
            <li>Calendário de marketing de conteúdo;</li>
          </div>

          <div className="w-full sm:w-1/2">
            <img src={service_15} alt="" className="w-full rounded-md" />
          </div>
        </ul>

        <p className="my-5 text-lg sm:text-xl text-white ">
          Não é porque existe um imenso avanço no marketing digital que as
          estratégias offline ficaram restritivas ou perderam sua influência.
          Trabalhar em 360º graus é a garantia que estaremos utilizando todos os
          recursos disponíveis em prol da concretização do nosso projeto.
        </p>

        <ul className="w-full flex flex-col list-disc sm:flex-row  sm:justify-around py-10 my-5 text-lg sm:text-xl text-white">
          <div className="flex flex-col   sm:items-start">
            <li>Papelaria completa;</li>
            <li>Identidade Visual;</li>
            <li>Impressos;</li>
            <li>Outdoors, busdoors;</li>
          </div>

          <div className="flex flex-col  sm:items-start mt-5 sm:mt-0">
            <li>Brindes;</li>
            <li>Apresentações;</li>
            <li>Catálogos;</li>
            <li>Manuais;</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Identidade;
