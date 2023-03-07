import styles from "../../style";
import service5 from "../../assets/Jose-Eduardo-Clenio-800x500.jpg";
import service1 from "../../assets/mirian gontijo.webp";
import service2 from "../../assets/pets-mellon-800x500.jpg";
import service3 from "../../assets/experimenta2.png";
import service4 from "../../assets/05-800x500.jpg";
import service6 from "../../assets/Haras Nimbus de Prata.webp";
import service7 from "../../assets/Sorriden - Pocahontas.png";
import service8 from "../../assets/Foto-5-800x500.jpg";
import service9 from "../../assets/casa-800x500.jpg";
import service10 from "../../assets/Foto-7-800x500.jpg";
import service11 from "../../assets/Foto-6-800x500.png";
import service12 from "../../assets/04-800x500.jpg";
import service13 from "../../assets/03-800x500.jpg";
import service14 from "../../assets/Fotos-Servicos-08-1.png";
import service15 from "../../assets/Leoni-com-Tania-Mara.jpg";

import estilos from "./index.module.css";

const Portfolio = () => {
  return (
    <section className={`mb-44 mt-10`}>
      <div className="text-center ">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[60.8px] leading-[45px]">
            <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Portfólio </span> {"  "}
          </h1>
        </div>
        <p className={`${styles.paragraph} text-center `}>
          Conheça alguns projetos que já realizamos
        </p>
      </div>

      <div className={`${estilos.section_padding} `}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service1} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Relançamento Mírian Gontijo Advogados
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service2} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Campanha Pets Mellon
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service3} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Campanha Experimenta GiOlaser
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service4} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Campanha Patense – Uma Empresa Do Bem
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service5} alt="" className="mx-auto" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Vídeo de Homenagem a Grande Colaborador do Grupo Patense:
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service6} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Haras Nimbus de Prata
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service7} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Sorriden – Pocahontas
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service8} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Café Nova Geração – Combina mais com o que?
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service9} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Dra. Elisângela- Médica para Família
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service10} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Casa – Centro de Atenção à Saúde
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service11} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Clênio Gonçalves- Dia dos Pais
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service12} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Sorridents – A Força de Um Sorriso
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service13} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Sem Limites – Uma História do Grupo Patense
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service14} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Patense 50 anos- José Borges Malheiros
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${estilos.services__three_item} ${estilos.page}`}
              >
                <img src={service15} alt="" />
                <div
                  className={`${estilos.services__three_item_content} ${estilos.page}`}
                >
                  <h4>
                    <a href="services-right-sidebar.html">
                      Leoni Alimentos – Campanha com Tânia Mara
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
