import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  ss:mb-36`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            O sucesso <br className="sm:hidden" /> {"  "}
            <span className="text-gradient">está à sua </span> {"  "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 z-10 bg-transparent">
            <a
              href="https://wa.me/5534999306776?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
              target="_blank"
              id="whatsapp"
              className="whatsapp"
            >
              <GetStarted />
            </a>
          </div>
        </div>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          espera
        </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Embarque com a gente rumo ao sucesso da sua marca. Vamos juntos
          encontrar os seus clientes ideais
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} z-10`}>
        <a
          href="https://wa.me/5534999306776?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
          target="_blank"
          id="whatsapp"
          className="whatsapp"
        >
          <GetStarted />
        </a>
      </div>
    </section>
  );
};

export default Hero;
