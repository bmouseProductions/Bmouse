import React, { useEffect, useState } from "react";
const DrLuis = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Dr Luis - Testando </span> {"  "}
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
          Ao iniciarmos uma parceria com o Dr. Luís Paulo, tínhamos como
          propósito desenvolver uma identidade visual que integrasse sua vasta
          experiência na área da ortopedia à contemporaneidade do mundo digital.
          Nossa meta era enfatizar a importância da tecnologia e da inteligência
          artificial, demonstrando aos atletas como esses avanços podem impactar
          positivamente em seu desempenho esportivo.
        </p>

        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          Ao produzir os vídeos, mantivemos a mesma abordagem tecnológica,
          sempre respeitando e complementando o perfil profissional do Dr. Luís
          Paulo. Nosso objetivo consistia em transmitir o conteúdo de maneira
          segura e didática, sem comprometer a essência do assunto tratado.
          Assim, proporcionamos aos espectadores uma experiência informativa e
          confiável, em total consonância com os valores e conhecimentos do
          doutor.
        </p>
      </div>
    </div>
  );
};

export default DrLuis;
