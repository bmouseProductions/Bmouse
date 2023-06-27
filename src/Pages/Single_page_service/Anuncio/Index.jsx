import React, { useEffect, useState } from "react";
import service6 from "../../../assets/service_6-aca44971.webp";

const Anuncio = () => {
  return (
    <section className="text-center relative z-10 py-32">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
          <br className="sm:hidden" /> {"  "}
          <span className="text-gradient">Anúncios Pagos</span> {"  "}
        </h1>
      </div>
      <br />
      <div className="text-white text-left p-5 sm:p-10">
        <p className="my-5 text-lg sm:text-xl ">
          O tráfego orgânico hoje já não entrega o conteúdo das empresas da
          forma que deveria, tanto no Google quanto nas redes sociais. O tráfego
          pago, comumente conhecido como anúncios patrocinados, é o modo mais
          eficaz de alcançar os seus potenciais clientes. Através das
          plataformas de anúncios patrocinados podemos atingir o seu
          público-alvo e convertê-lo em clientes reais, de forma objetiva e
          eficaz.
          <br />
          Criamos campanhas comerciais inteligentes, aproveitando todas as
          ferramentas que as plataformas oferecem. Todas as campanhas são
          acompanhadas e aprimoradas diariamente, de modo a aproveitar melhor
          cada centavo investido pelos nossos clientes, garantindo o maior
          retorno do investimento.
          <br />
          Geramos relatórios mensais de todas as plataformas para que você possa
          acompanhar como o seu dinheiro está sendo investido e todos os
          resultados obtidos pelas campanhas de anúncios.
        </p>
        <ul className="w-full flex  py-10 my-5 text-lg sm:text-xl ">
          <div>
            <li>• Facebook ADS;</li>
            <li>• Google ADS;</li>
            <li>• Linkedin ADS;</li>
            <li>• Tiktok ADS;</li>
            <li>• Kwai ADS;</li>
            <li>• Captura de Leads / E-mail Marketing;</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Anuncio;
