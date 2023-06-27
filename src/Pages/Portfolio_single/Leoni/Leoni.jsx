import React, { useEffect, useState } from "react";

const Leoni = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Leoni Alimentos - Campanha com Tânia Mara{" "}
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="text-center mt-10 justify-center flex mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9nmgOagHI7Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          Uma das nossas campanhas mais marcantes e gostosas foi a parceria da
          marca Leoni Alimentos e a artista Tânia Mara.
        </p>
        <p className="my-5 text-lg sm:text-xl ">
          Marketing de alimentos, como a carne, costuma seguir o mesmo padrão:
          algo atribuído a masculinidade, em que os homens preparam o churrasco.
          Contudo, nós da Bmouse pensamos no diferencial, afinal, o padrão não
          chama atenção.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          Nosso projeto focou na pergunta “Quem disse mesmo que mulher não sabe
          fazer churrasco?”, personificando a qualidade dos produtos na figura
          de Tânia Mara que, na propaganda, realiza e experimenta sua própria
          comida no ponto de sua preferência.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          Chamamos a atenção dos clientes, despertamos neles algo diferente e,
          assim, o interesse pelo produto.
        </p>
      </div>
    </div>
  );
};

export default Leoni;
