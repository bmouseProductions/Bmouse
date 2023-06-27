import React, { useEffect, useState } from "react";

const Clenio = () => {
  return (
    <div className="text-center relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">
            Clênio Gonçalves- Dia dos Pais{" "}
          </span>{" "}
          {"  "}
        </h1>
      </div>
      <div className="mt-10 mx-auto max-w-4xl">
        <iframe
          className="w-full h-96 sm:h-120"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1PQP3YZNPYs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Clenio;
