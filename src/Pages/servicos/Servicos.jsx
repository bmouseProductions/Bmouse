import styles from "../../style";
import service5 from "../../assets/services-5.jpg";
import service1 from "../../assets/service_1.webp";
import service2 from "../../assets/service_2.webp";
import service3 from "../../assets/service_3.webp";
import service4 from "../../assets/service_4.webp";
import service6 from "../../assets/service_6.webp";
import service7 from "../../assets/service_7.webp";
import service8 from "../../assets/service_14.webp";
import service10 from "../../assets/service_15.webp";

import service9 from "../../assets/adiovisual.svg";
import agroecologia from "../../assets/agroecologia.svg";
import mkt from "../../assets/mktdigital.svg";
import mktof from "../../assets/mktoff.svg";
import foto from "../../assets/produtosdigitais.svg";
import site from "../../assets/dev.svg";
import anuncio from "../../assets/estrategica.svg";
import estilos from "./index.module.css";

const Servicos = () => {
  return (
    <>
      <section className={`mb-44 mt-10`}>
        <div className="text-center ">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
              <br className="sm:hidden" /> {"  "}
              <span className="text-gradient">Nossos Serviços </span> {"  "}
            </h1>
          </div>
        </div>

        <div className={`${estilos.section_padding}`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div className="col-span-1">
                <a href="/identidade-visual">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service1} alt="" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={service9} alt="" className="  mx-auto" />
                      </div>
                      <h4>
                        Identidade Visual / <br /> Marketing Offline
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a href="/marketing">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service2} alt="" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={mkt} alt="" className="mx-auto" />
                      </div>
                      <h4>
                        Marketing Digital / <br /> Gestão De Mídias Sociais
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className={`col-span-1 ${estilos.gradient}`}
                style={{
                  backgroundImage: `url(${service3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  minHeight: "340px",
                }}
              >
                <a href="/endomarketing">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={mktof} alt="" className="mx-auto" />
                      </div>
                      <h4>Endomarketing</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a href="/foto-video">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service4} alt="" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={foto} alt="" className="mx-auto" />
                      </div>
                      <h4>Foto e vídeo</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a href="/anuncio">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service6} alt="" className="mx-auto" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={anuncio} alt="" className="mx-auto" />
                      </div>
                      <h4>Anúncios Patrocinados</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a href="/sites">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service7} alt="" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={site} alt="" className="mx-auto" />
                      </div>
                      <h4>Criação de Sites</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a href="/acessoria">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service8} alt="" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={service9} alt="" className="mx-auto" />
                      </div>
                      <h4>
                        Assessoria de <br />
                        Imprensa
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-1">
                <a href="/bmouse">
                  <div
                    className={`${estilos.services__three_item} ${estilos.page}`}
                  >
                    <img src={service10} alt="" />
                    <div
                      className={`${estilos.services__three_item_content} ${estilos.page}`}
                    >
                      <div
                        className={`${estilos.services__three_item_content_icon}`}
                      >
                        <img src={service9} alt="" className="mx-auto" />
                      </div>
                      <h4>
                        BMouse e o Futebol <br />
                        Brasileiro
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
