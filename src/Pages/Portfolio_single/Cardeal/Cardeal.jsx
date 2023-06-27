import React, { useEffect, useState } from "react";
const Cardeal = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Cardeal - Testando </span> {"  "}
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
          Nosso foco ao desenvolver uma identidade para a Cardeal
          Empreendimentos era ressaltar a marca e posicionar a empresa de forma
          destacada no mercado, transmitindo uma
        </p>

        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          imagem atualizada. Para isso, nosso objetivo principal consistia em
          criar uma identidade visual versátil, adequada tanto para o ambiente
          online quanto offline, que pudesse ser facilmente aplicada em diversos
          materiais e conteúdos, garantindo assim que a marca se destacasse em
          todas as suas aparições.
        </p>
      </div>
    </div>
  );
};

export default Cardeal;
