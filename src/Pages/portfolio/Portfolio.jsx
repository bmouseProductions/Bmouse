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
import service16 from "../../assets/IVETE_3682.jpg";

import estilos from "./index.module.css";

const Portfolio = () => {
  return (
    <section className={`mb-44 mt-10`}>
      <div className="text-center ">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">Portfólio </span> {"  "}
          </h1>
        </div>
        <p className={`${styles.paragraph} text-center `}>
          Conheça alguns dos nossos projetos.
        </p>
      </div>

      <div className={`${estilos.section_padding} `}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-stretch">
            <div className="col-span-1">
              <a href="/mirian-gontijo">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service1} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Relançamento Mirían Gontijo Advogados</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/pets-mellon">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service2} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white`}
                  >
                    <h4>Campanha Pets Mellon</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/giolaser">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service3} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Campanha Experimenta GiOlaser</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/empresa-do-bem">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service4} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Campanha Patense – Uma Empresa Do Bem</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/homenagem">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service5} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>
                      Vídeo de homenagem a um grande colaborador do Grupo
                      Patense.
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/haras-nimbus-de-prata">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service6} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white bg-gradient-to-br `}
                  >
                    <h4>Haras Nimbus de Prata</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/sorriden">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service7} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white bg-gradient-to-br `}
                  >
                    <h4>Sorriden – Pocahontas</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/cafe-nova-geracao">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service8} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white`}
                  >
                    <h4>Café Nova Geração – Combina mais com o que?</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/casa">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service9} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white bg-gradient-to-br `}
                  >
                    <h4>Casa – Centro de Atenção à Saúde</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/Dra">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service10} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Dra. Elisângela- Médica para Família</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/clenio">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service11} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white`}
                  >
                    <h4>Clênio Gonçalves- Dia dos Pais</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/sorriso">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service12} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white  `}
                  >
                    <h4>Sorridents – A Força de Um Sorriso</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/sem-limites-uma-historia-do-grupo-patense">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service13} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Sem Limites – Uma História do Grupo Patense</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/patense-50-anos-jose-borges-malheiros">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service14} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Patense 50 anos- José Borges Malheiros</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/leoni-alimentos">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service15} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white  `}
                  >
                    <h4>Leoni Alimentos – Campanha com Tânia Mara</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/sorridentes">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service16} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white  `}
                  >
                    <h4>Sorridentes - Campanha Alegria com Ivete Sangalo</h4>
                  </div>
                </div>
              </a>
            </div>
            {/*    <div className="col-span-1">
              <a href="/zoomies">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service16} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white  `}
                  >
                    <h4>Zoomies - Testandoo</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/whg">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service16} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white  `}
                  >
                    <h4>WHG - Testandoo</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/mid">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service16} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>MID - Testandoo</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/dr-luis">
                <div
                  style={{ backgroundColor: "#4bc0ee" }}
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service16} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Dr Luis - Testandoo</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-1">
              <a href="/cardeal">
                <div
                  className={`${estilos.services__three_item} relative h-full`}
                >
                  <img src={service16} className="w-full h-full object-cover" />
                  <div
                    style={{ backgroundColor: "#4bc0ee" }}
                    className={`absolute bottom-0 left-0 w-full p-2 text-center text-white `}
                  >
                    <h4>Cardeal - Testandoo</h4>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
