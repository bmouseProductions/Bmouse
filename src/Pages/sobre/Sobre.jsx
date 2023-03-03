import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";
import tom from "../../assets/tom&beta@2x.png";
import grupo from "../../assets/agencia@2x.png";
import grupo2 from "../../assets/Prancheta1.png";
import grupodark from "../../assets/audiovisual@2x.png";

const Sobre = () => {
  return (
    <>
      <div className="text-center ">
        <div className="flex flex-row justify-between items-center w-full mb-6">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[60.8px] leading-[45px]">
            <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Sobre nós </span> {"  "}
          </h1>
        </div>
      </div>
      <section className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-left`}>
            Quem{" "}
            <span className="bg-[#e05673] rounded-bl-2xl p-1">somos nós?</span>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
            Somos uma agência de criatividade, criada por Tom Gonçalves e
            Roberta Almeida na “terra do rato”. A Disney é o lugar em que sonhos
            se tornam reais, e, talvez, por ter nascido lá, sejamos
            especialistas em emocionar tantas pessoas ao tornar realidade o que
            antes era inimaginável. A BMouse retorna ao Brasil revolucionando o
            tradicional recurso de contar histórias, mudando destinos e
            construindo o que vem depois do fim.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
            Tom e Roberta conhecem os bastidores do show business, sabem que é
            ali onde a magia acontece e decidiram juntos impulsionar a carreira
            de quem confia em seu trabalho. Eles sabem que contar uma história é
            fazer com que mais pessoas contribuam para seu sonho se tornar real.
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img src={tom} alt="billing" className="w-[100%]  relative z-[5]" />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        </div>
      </section>

      <section className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={grupo} alt="billing" className="w-[100%] relative z-[5]" />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-left`}>
            O que nos <br />
            torna{" "}
            <span className="bg-[#e05673] rounded-bl-2xl p-1">diferentes?</span>
          </h2>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 text-left border-l-4 px-2  border-l-[#e05673] rounded-xl`}
          >
            A Bmouse não cobra Bônus de Veiculção (BV) dentro das suas
            campanhas. Acreditamos que essa cobrança faz com que o foco deixe de
            ser a qualidade e se torne o faturamento. Para ilustrar melhor,
            imagine cantores que lançam hits sem qualidade artística e focam
            apenas em números alcançados, ou ainda, boas canções que não
            alcançam o sucesso - não é isso que queremos. Nosso objetivo é
            alcance e qualidade em grande escala.
          </p>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 text-left border-l-4 px-2  border-l-[#e05673] rounded-xl`}
          >
            Um bom projeto, assim como uma boa história, tem início, meio e fim.
            Dessa forma, os objetivos propostos pelos clientes são canalizados,
            o que possibilita criar um plano de médio a longo prazo,
            conquistando metas e firmando a sua marca no mercado
          </p>
        </div>
      </section>
      <section className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-left`}>
            Como <br />{" "}
            <span className="bg-[#e05673] rounded-bl-2xl p-1">
              trabalhamos?
            </span>
          </h2>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 text-left border-l-4 px-2  border-l-[#e05673] rounded-xl`}
          >
            A BMouse não sobrecarrega os seus profissionais. Selecionamos
            demandas prioritárias e escolhemos os nossos clientes a dedo, assim,
            há sempre um excelente profissional disponível para cuidar desses
            projetos e garantir que as ações cheguem a tempo na mão dos clientes
            e com alta qualidade
          </p>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 text-left border-l-4 px-2  border-l-[#e05673] rounded-xl`}
          >
            Trabalhamos em 360º graus, isso quer dizer que, na elaboração de
            estratégias e execução, entregamos um marketing consistente tanto no
            digital quanto no convencional. Temos um imenso "know-how" no setor
            audiovisual com equipamentos a nível de Hollywood, que garante a
            criação e execução de todas as missões sem envolver terceiros.
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img src={grupo2} alt="billing" className="w-[100%] relative z-[5]" />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        </div>
      </section>
    </>
  );
};

export default Sobre;
