import React, { useEffect, useState } from "react";

const Sorridents = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Sorridentes - Campanha Alegria com Ivete Sangalo
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1iK6aTjA3f8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Essa campanha foi idealizada pensando em algo original para o
          marketing odontológico, algo que não utilizasse o "sorriso" como sua
          principal tag, mas que ainda atribuía sua importância para a
          autoestima. Foi assim que surgiu o projeto “Alegria”, com a principal
          meta de transmitir a mensagem: “Nós cuidamos do seu sorriso, mas a sua
          felicidade só depende de você”.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          Ninguém melhor para personificar nossa ideia que a artista Ivete
          Sangalo, que carrega em sua carreira uma música de mesmo nome que a
          campanha e, como esperado, foi um grande sucesso!
        </p>
      </div>
    </div>
  );
};

export default Sorridents;
