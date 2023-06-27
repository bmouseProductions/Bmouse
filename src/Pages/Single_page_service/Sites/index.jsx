import React, { useEffect, useState } from "react";
import service_15 from "../../../assets/service_7-6fcfcc54.webp";

const Sites = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" />{" "}
          <span className="text-gradient">Programação e Performance</span>{" "}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row-reverse items-center w-full">
        <img className="w-full sm:w-1/2 p-10" src={service_15} alt="" />
        <div className="text-white text-left p-5 sm:p-10 w-full sm:w-1/2">
          <p className="relative gap-10 p-5 text-lg text-white z-50">
            Faz parte do planejamento estratégico o desenvolvimento de sites
            institucionais, landing pages, e-commerces e tudo o que o seu
            projeto necessitar. Criamos páginas rápidas e responsivas, com
            conteúdos comerciais e estratégicos, para mostrar ao mundo o melhor
            que sua empresa ou produto tem a oferecer.
          </p>
          <ul className="w-full  sm:flex-row  sm:justify-around py-10 my-5 text-lg sm:text-xl text-white">
            <li>• Sites Institucionais;</li>
            <li>• Landing Pages;</li>
            <li>• E-commerce;</li>
            <li>• Blog;</li>
            <li>
              • SEO (Search Engine Optimization ou Otimização para Mecanismos de
              Busca);
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sites;
