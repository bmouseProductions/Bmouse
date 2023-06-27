import React, { useEffect, useState } from "react";
const MID = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">MID - Testando </span> {"  "}
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
          A Medic Imagem Diagnósticos é uma clínica conhecida por sua reputação
          de equipamentos avançados e exames precisos. Para refletir essa
          excelência, decidimos aprimorar sua identidade visual. <br />
          Ao embarcar nessa jornada, buscamos incorporar mais tecnologia,
          alinhando-nos à tendência atual da Inteligência Artificial.
          Desenvolvemos uma nova imagem que reflete a alta tecnologia presente
          na clínica.
        </p>

        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Nosso objetivo principal foi fortalecer a posição da Medic Imagem
          Diagnósticos no setor. Para isso, criamos conteúdos cuidadosamente
          trabalhados, combinando tecnologia e sofisticação. Utilizamos imagens
          relacionadas à Inteligência Artificial para transmitir a mensagem de
          inovação e precisão.
        </p>
      </div>
    </div>
  );
};

export default MID;
