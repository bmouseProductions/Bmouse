import React, { useEffect, useState } from "react";

const Haras = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Haras Nimbus de Prata </span> {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/574980464?h=6f43e1ebdc"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Tivemos o prazer de conhecer a imensidão tranquila e azul da Fazenda
          de criação de cavalos manga larga Haras Nimbus de Prata. Tivemos o
          cuidado de captar cada detalhe desse lugar e dessa história que
          transborda charme e simplicidade, o chapéu de palha, o cafezinho
          mineiro, a paixão e o cuidado com os animais.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          Nós não poupamos recursos ou esforços para essa produção, e o
          resultado não poderia ser diferente: qualquer um consegue sentir
          através da tela o prazer de estar lá. E isso reforça a ideia de que
          todos os tipos de negócio precisam de um marketing de bom gosto e
          qualidade.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          A trilha sonora e as técnicas que utilizamos para conduzir a família
          Miranda Silveira ao contar sua história dão o toque especial BMouse e
          traz para o público a melhor versão possível desse empreendimento.
        </p>
      </div>
    </div>
  );
};

export default Haras;
