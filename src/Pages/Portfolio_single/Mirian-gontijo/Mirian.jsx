import React, { useEffect, useState } from "react";

const Mirian = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" />{" "}
          <span className="text-gradient">Relançamento Mírian Gontijo</span>{" "}
        </h1>
      </div>
      <div className="mt-10 mx-auto max-w-4xl">
        <iframe
          className="w-full h-96 sm:h-120"
          src="https://www.youtube.com/embed/uZe4i6H_NFc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl">
          Essa produção foi a nossa grande aposta para o relançamento do
          escritório Mírian Gontijo Advogados com a nova identidade visual.
          <br />
          <br />O vídeo foi capaz de entregar toda a qualidade, exigências e
          valores que prometemos transmitir ao público em forma de imagens e
          falas da talentosíssima Dra. Mírian.
        </p>

        <p className="my-5 text-lg sm:text-xl">
          O resultado excepcional vocês podem conferir no Instagram da Mírian
          Gontijo Advogados @miriangontijoadv.
          <br />
          <br />A nossa jornada ao lado delas está apenas começando, e essa
          parceria já tem tudo para ser um case de sucesso enorme. Assista ao
          vídeo:
        </p>
      </div>
    </div>
  );
};

export default Mirian;
