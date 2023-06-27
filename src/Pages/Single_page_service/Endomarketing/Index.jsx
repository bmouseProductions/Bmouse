import React, { useEffect, useState } from "react";
import service_15 from "../../../assets/service_3-8d89083d.webp";

const Endomarketing = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Endomarketing</span> {"  "}
        </h1>
      </div>
      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl text-white">
          Muitas empresas sofrem com o desinteresse e desmotivação de sua
          equipe, ou ainda, com a alta rotatividade de seus colaboradores. Isso
          pode acontecer, dentre outros motivos, pela deficiência na comunicação
          interna e corporativa, além de falhas ao informar metas, objetivos e
          dados de forma segura, clara e eficiente. Para isso, o nosso
          planejamento de marketing interno é formulado de acordo com as atuais
          dificuldades da empresa, alinhado com os valores e visão daquele
          empreendimento para, assim, conseguirmos encontrar a melhor maneira de
          ouvir e motivar os colaboradores de modo dinâmico e inclusivo.
          <br />
          Nosso endomarketing atual conta com:
        </p>
        <ul className="w-full flex flex-col list-disc sm:flex-row  sm:justify-around py-10 my-5 text-lg sm:text-xl text-white">
          <div className="flex flex-col  sm:items-start">
            <li>
              Dicas de produtividade, saúde e boas-práticas via WhatsApp;{" "}
            </li>
            <li> Calendário anual de ações em datas comemorativas; </li>
            <li>
              Campanhas mensais abordando temas importantes para a empresa e
              para a sociedade;{" "}
            </li>
            <li> Criação de normas e manuais de treinamento para o time; </li>
          </div>

          <div>
            <li> Valorização de grandes feitos dos colaboradores;</li>
            <li> Engajamento dos colaboradores nas redes sociais do grupo;</li>
            <li>
              Criação do modelo e das ferramentas de comunicação internas do
              grupo;
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Endomarketing;
