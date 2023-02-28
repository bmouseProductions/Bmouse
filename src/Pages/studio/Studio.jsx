import styles from "../../style";
import "./index.css";
import MessageIcon from "@mui/icons-material/Message";

const Studio = () => {
  return (
    <section className={`mb-44 mt-32`}>
      <div className="text-center ">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[60.8px] leading-[45px]">
            Conheça Os <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Studios Bmouse </span> {"  "}
          </h1>
        </div>
        <p className={`${styles.paragraph} text-center `}>
          Seus potenciais clientes já estão esperando pelo seu negócio, <br />
          nós vamos trazê-los até você.
        </p>
      </div>

      <div className="container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] dark:bg-pro-black-1 bg-pro-w-white hover:shadow-lg dark:hover:bg-pro-black-2 hover:bg-slate-800 dark:shadow-inherit shadow-pro-w-shadow2">
              <div className="flex flex-col">
                <div className="flex justify-center items-center bg-[#4bc0ee] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full ]">
                  <MessageIcon sx={{ color: "white" }} />
                </div>
                <h3 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#FFFFFF] text-pro-w-black my-5">
                  Studios Bmouse
                </h3>
                <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC] text-[#5B6478] text-left">
                  Com o predomínio das redes sociais na vida das pessoas, nossa
                  história passou a ser contada melhor em formato de imagens. Um
                  vídeo tem um poder imenso de atingir as pessoas, transmitir
                  mensagens e engajar o público-alvo para determinados objetivos
                  e, por isso, não nos cansamos de investir na nossa capacidade
                  criativa e técnica de aprimoramento desse setor.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] dark:bg-pro-black-1 bg-pro-w-white hover:shadow-lg dark:hover:bg-pro-black-2 hover:bg-slate-800 dark:shadow-inherit shadow-pro-w-shadow2">
            <div className="flex flex-col">
              <div className="flex justify-center items-center  xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full bg-[#4bc0ee]">
                <MessageIcon sx={{ color: "white" }} />
              </div>
              <h3 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#FFFFFF] text-pro-w-black my-5">
                Studios Bmouse
              </h3>
              <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC] text-[#5B6478] text-left">
                A Bmouse, além do seu vasto arsenal de equipamentos para
                produções audiovisuais, ainda conta com um espaço exclusivo para
                a realização de suas filmagens. Dentro dos Studios Bmouse você
                encontra tudo necessário para a realização da sua filmagem,
                edição e sonoplastia.
              </p>
            </div>
          </div>
          <div className="flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] dark:bg-pro-black-1 bg-pro-w-white hover:shadow-lg dark:hover:bg-pro-black-2 hover:bg-slate-800 dark:shadow-inherit shadow-pro-w-shadow2">
            <div className="flex flex-col">
              <div className="flex justify-center items-center  xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full bg-[#4bc0ee]">
                <MessageIcon sx={{ color: "white" }} />
              </div>
              <h3 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#FFFFFF] text-pro-w-black my-5">
                Studios Bmouse
              </h3>
              <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC] text-[#5B6478] text-left">
                Não adianta grandes ideias se você se encontra tecnicamente
                limitado para executá-las, por isso, um dos nossos principais
                focos é investir na infraestrutura da nossa empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
