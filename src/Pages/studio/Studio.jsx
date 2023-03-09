import styles, { layout } from "../../style";
import "./index.css";
import MessageIcon from "@mui/icons-material/Message";
import grupodark from "../../assets/audiovisual@2x.png";
import ratinho from "../../assets/ratinho123.png";
import studio from "../../assets/logostudios.svg";
import teste from "../../assets/comercial.webp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import anima from "../../assets/Animacao.webp";
import apre from "../../assets/ApresentacaodeProdutos.webp";
import curta from "../../assets/CurtaMetragem.webp";
import docs from "../../assets/Documentario.webp";
import corpot from "../../assets/FotoCorporativa.webp";
import inst from "../../assets/Institucional.webp";
import motion from "../../assets/Motion.webp";
import treina from "../../assets/Treinamento.webp";
import aula from "../../assets/VideoAula.webp";

const Studio = () => {
  return (
    <>
      <section className=" mt-24 mb-10">
        <div className="flex items-center justify-center ">
          <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-0 mx-auto">
            <div className="flex flex-col items-center sm:items-start">
              <img src={studio} />
              <p className="text-white mt-6 text-2xl">
                Um mundo de possibilidades
              </p>
              <p className=" text-white text-sm sm:text-lg max-w-[450px] text-left mt-2 ">
                A BMouse, além do seu vasto arsenal de equipamentos para
                produções audiovisuais, ainda conta com um set de filmagens
                completo. Dentro dos Studios BMouse você encontra tudo que é
                necessário para a realização da sua filmagem, edição e
                sonoplastia.
              </p>
            </div>
            <div className="text-white flex-1 mt-4 sm:mt-0 ml-10 flex ">
              <img
                src={ratinho}
                className="hidden sm:block w-full sm:w-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-left`}>
            Nossa capacidade de{" "}
            <span className="bg-[#e05673] rounded-bl-2xl p-1">produção</span>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
            Nossa agência é mais do que uma equipe distribuída em vários estados
            do país. Somos uma empresa moderna, 100% automatizada e preparada
            para atender às mais diversas demandas dos nossos clientes. Além
            disso, contamos com um estúdio de filmagem de última geração,
            equipado com tecnologia de ponta e uma estrutura completa para
            produzir conteúdos de alta qualidade. E o melhor de tudo: podemos
            realizar tudo isso de forma remota, com toda a eficiência e
            agilidade que sua empresa‟precisa.
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img
            src={grupodark}
            alt="billing"
            className="w-[100%]  relative z-[5]"
          />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-center`}>
            Ckecklist de <br />{" "}
            <span className="bg-[#e05673] rounded-bl-2xl p-1">
              equipamentos
            </span>
          </h2>
          <p
            className={`${styles.paragraph}  mt-5 text-center`}
            style={{ maxWidth: "1000px", margin: "0 auto", paddingTop: "20px" }}
          >
            Grandes ideias para divulgar a sua marca se tornam ainda maiores com
            a liberdade técnica que temos para executá-las. Isso quer dizer que
            “se dá pra sonhar, dá pra fazer.” Um dos nossos principais focos é
            investir em infraestrutura, conheça o que temos disponível:
          </p>
          <div
            className={`${layout.section} text-center mx-auto justify-center`}
          >
            <ul
              className={`${styles.paragraph} max-w-[470px] mt-5 text-left leading-10 mr-10`}
            >
              <li>
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Panasonic
                S1H (Netflix Available) - 6K
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Sony A7r IV
                - 61MP/4K
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> BlackMagic
                Cinema Pocket - 4K (Cinema Camera)
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Panasonic
                GH5 - 4K
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> DJI Ronin S
                / DJI Ronin M (Estabilizadores de movimento)
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Lapelas
                Wireless Sennheiser
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Microfone
                Cinema Rode
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Microfones
                Shotgun Rode
              </li>
            </ul>
            <ul
              className={`${styles.paragraph} max-w-[470px] mt-5 text-left leading-10`}
            >
              <li>
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> DJI Mavic
                Pro 2 (Drone)
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Kit
                completo de lentes prime Canon
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Ilha de
                edição (MacBook Pro, Asus Zenbook Pro Duo, PC de edição)
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} />{" "}
                Equipamentos completos para streaming
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} />{" "}
                Equipamentos completos para Podcast
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} />{" "}
                Equipamentos para gravação de áudio e vinhetas
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> BlackMagic
                Ursa Pro - 12K (Cinema)
              </li>
              <li>
                {" "}
                <CheckCircleOutlineIcon sx={{ color: "#90375c" }} /> Panasonic
                S1H (Netflix Available) - 6K
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cards mt-20">
        <div className="flex flex-row justify-between items-center w-full text-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[32px] text-white ss:leading-[100.8px] leading-[35px]">
            Conteúdos <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Audiovisuais </span> {"  "}
            em que somos <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">especialistas </span> {"  "}
          </h1>
        </div>
        <div className="container">
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${teste})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>01</h2>
                <h3>Comerciais</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${inst})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="relative content">
                <h2>02</h2>
                <h3>Vídeos Institucionais</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${apre})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>03</h2>
                <h3>Apresentação de produtos</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${corpot})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>04</h2>
                <h3>Fotografias corporativas</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${treina})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>05</h2>
                <h3>Treinamentos internos</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${motion})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>06</h2>
                <h3>Motion Graphics</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${curta})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>07</h2>
                <h3>Longa e curta metragem</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${docs})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>08</h2>
                <h3>Documentários</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${aula})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>09</h2>
                <h3>Vídeo Aulas</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="box"
              style={{
                backgroundImage: `url(${anima})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative content">
                <h2>10</h2>
                <h3>Animações (2D e 3D)</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
