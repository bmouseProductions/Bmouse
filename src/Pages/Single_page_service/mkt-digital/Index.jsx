import React, { useEffect, useState } from "react";
import service_15 from "../../../assets/service_2-91dd9f39.webp";

const Marketing = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Marketing Digital</span> {"  "}
        </h1>
      </div>
      <div className="text-white text-left p-5 sm:p-10">
        <p className="relative gap-10 p-5 text-lg text-white z-50">
          A internet: a mais cobiçada esfera de comunicação atual, onde todos
          vislumbram causar impacto.
          <br />O mundo gira em torno dos smartphones, que se tornaram grandes
          ferramentas e proporcionam oportunidades gigantescas de crescimento
          para qualquer negócio. Somos especialistas em transformar os seus
          objetivos, sonhos e desejos em realidade através desse universo que
          desbravaremos juntos. Veja as etapas:
        </p>
        <ul className="w-full flex justify-around py-10 my-5 text-lg sm:text-xl text-white">
          <div className="flex flex-col  sm:items-start">
            <li>• Social Media (manutenção, postagens e responsividade);</li>
            <li>• Remarketing;</li>
            <li>• Impulsionamento de conteúdos;</li>
            <li>• Criação de landing pages;</li>
            <li>• Campanhas performadas;</li>
          </div>

          <div>
            <li>• Criação de conteúdos de sucesso;</li>
            <li>• Monitoramento de críticas;</li>
            <li>• Interatividade com seguidores;</li>
            <li>• Marketing;</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Marketing;
