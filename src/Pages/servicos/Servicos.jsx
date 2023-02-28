import styles from "../../style";
import service5 from "../../assets/services-5.jpg";
import service1 from "../../assets/service_1.webp";
import service2 from "../../assets/service_2.webp";
import service3 from "../../assets/service_3.webp";
import service4 from "../../assets/service_4.webp";
import service6 from "../../assets/service_6.webp";
import service7 from "../../assets/service_7.webp";

import service9 from "../../assets/services-9.png";
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
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
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
                      <img src={service9} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">
                        Marketing Digital / <br /> Gestão De Mídias Sociais
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div
                  className={`${estilos.services__three_item} ${estilos.page}`}
                >
                  <img src={service3} alt="" style={{ height: "420px" }} />
                  <div
                    className={`${estilos.services__three_item_content} ${estilos.page}`}
                  >
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={service9} alt="" className="mx-auto" />
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
                      <img src={service9} alt="" className="mx-auto" />
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
                      <img src={service9} alt="" className="mx-auto" />
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
                      <img src={service9} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">Criação De Sites</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 mx-auto place-content-center text-center">
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
                      <img src={service9} alt="" className="mx-auto" />
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
                  <img src={service4} alt="" />
                  <div
                    className={`${estilos.services__three_item_content} ${estilos.page}`}
                  >
                    <div
                      className={`${estilos.services__three_item_content_icon}`}
                    >
                      <img src={service9} alt="" className="mx-auto" />
                    </div>
                    <h4>
                      <a href="services-right-sidebar.html">Foto E Vídeo</a>
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
