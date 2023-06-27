import React, { useEffect, useState } from "react";

const Giolaser = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Campanha Experimenta GiOlaser{" "}
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="mt-10 mx-auto max-w-4xl">
        <iframe
          className="w-full h-96 sm:h-120"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FKxhEyAM-9I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-white text-left p-5 sm:p-10">
        <p
          className="my-5 text-lg sm:text-xl "
          /* dangerouslySetInnerHTML={{
            __html: rows.news,
          }} */
        >
          A campanha foi realizada no ano de 2019, ano em que o renomado Grupo
          Salus adquiriu parte da rede de franquias GiOlaser, fundada pela atriz
          Giovana Antonelli. O objetivo era ousado, aumentar o número de
          franquias que na época eram pouco mais de 30, e levar para a população
          a excelente qualidade dos serviços que eram oferecidos pela franquia.
        </p>

        <p className="my-5 text-lg sm:text-xl ">
          Ao constatar a excelente qualidade dos produtos, a campanha
          experimenta foi criada para levar ao público que a única coisa que
          precisavam era realmente conhecer os produtos, pois sabíamos que se
          isso acontecesse conseguiríamos converter diversos clientes para a
          nossa carteira. A campanha foi um sucesso, e hoje a franquia já
          ultrapassa 350 unidades espalhadas em todo o Brasil.
        </p>
      </div>
    </div>
  );
};

export default Giolaser;
