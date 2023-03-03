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
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[60.8px] leading-[45px]">
              <br className="sm:block hidden" /> {"  "}
              <span className="text-gradient">Nossos Serviços </span> {"  "}
            </h1>
          </div>
        </div>

        <div className={`${estilos.section_padding}`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div className="col-span-1">
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
                      <a href="services-right-sidebar.html">
                        Identidade Visual / <br /> Marketing Offline
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
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={mkt} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">
                        Marketing Digital / <br /> Gestão De Mídias Sociais
                      </a>
                    </h4>
                  </div>
                </div>
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
                    <h4>
                      <a href="services-right-sidebar.html">Endomarketing</a>
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
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={foto} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">Foto E Vídeo</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
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
                    <h4>
                      <a href="services-right-sidebar.html">
                        Anúncios Patrocinados
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
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={site} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">Criação De Sites</a>
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
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={service9} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">
                        Assessoria De <br />
                        Imprensa
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
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={service9} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">
                        BMouse E O Futebol <br />
                        Brasileiro
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
