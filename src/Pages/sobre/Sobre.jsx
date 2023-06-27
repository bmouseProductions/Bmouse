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
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
          <h1 className="flex-1 font-poppins font-semibold text-3xl sm:text-5xl text-white leading-tight sm:leading-none">
            <br className="sm:hidden" /> {"  "}
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
            Na terra onde a magia se torna realidade, Tom Gonçalves e Roberta
            Almeida fundaram a Bmouse, uma agência de criatividade que sabe como
            emocionar. Inspirados pela Disney, revolucionamos a arte de contar
            histórias e transformamos o impossível em possível. Através da
            Bmouse, mudamos destinos e construímos novos futuros. Somos a
            agência que constrói o que vem depois do fim, levando nossos
            clientes a novos patamares e superando todas as expectativas.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
            Tom e Roberta têm experiência nos bastidores do show business, sabem
            que é ali onde a verdadeira magia acontece e decidiram unir forças
            para impulsionar as carreiras de seus clientes. Para eles, a chave
            para o sucesso é contar uma história de forma envolvente e
            inspiradora, fazendo com que cada vez mais pessoas contribuam para
            transformar um sonho em realidade.
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img src={tom} alt="billing" className="w-[100%]  relative z-[5]" />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        </div>
      </section>

      <section
        className={`${layout.sectionReverse} flex-col-reverse md:flex-row`}
      >
        <div className={`${layout.sectionImgReverse} order-1 md:order-2`}>
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
