import styles, { layout } from "../../style";
import "./index.css";
import MessageIcon from "@mui/icons-material/Message";
import grupodark from "../../assets/audiovisual@2x.png";
import ratinho from "../../assets/ratinho123.png";
import studio from "../../assets/logostudios.svg";

const Studio = () => {
  return (
    <>
      <section className="mt-8 mb-10">
        <div className="h-screen flex items-center justify-center mb-44">
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

      <section className="cards">
        <div className="flex flex-row justify-between items-center w-full text-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Conteúdos <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Audiovisuais </span> {"  "}
            em que somos <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">especialistas </span> {"  "}
          </h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>01</h2>
                <h3>Comerciais</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>02</h2>
                <h3>Vídeos Institucionais</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Apresentação de produtos</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>04</h2>
                <h3>Fotografias corporativas</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>05</h2>
                <h3>Treinamentos internos</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>06</h2>
                <h3>Motion Graphics</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>07</h2>
                <h3>Longa e curta metragem</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>08</h2>
                <h3>Documentários</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <h2>09</h2>
                <h3>Vídeo Aulas</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
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
