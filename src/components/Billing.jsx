import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import tom from "../assets/tom&beta_home@2x.png";
import Button from "./Button";

const Billing = () => {
  return (
    <>
      <section className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-left`}>
            Quem{" "}
            <span className="bg-[#e05673] rounded-bl-2xl p-1">somos nós?</span>
          </h2>
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5 text-left mb-4`}
          >
            Somos uma agência de criatividade, criada por Tom Gonçalves e
            Roberta Almeida na “terra do rato”. A Disney é o lugar em que sonhos
            se tornam reais, e, talvez, por ter nascido lá, sejamos
            especialistas em emocionar tantas pessoas ao tornar realidade o que
            antes era inimaginável. A BMouse retorna ao Brasil revolucionando o
            tradicional recurso de contar histórias, mudando destinos e
            construindo o que vem depois do fim.
          </p>
          <Button text="Saiba mais" link="/sobre" />
        </div>
        <div className={layout.sectionImgReverse}>
          <img src={tom} alt="billing" className="w-[100%]  relative z-[5]" />

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
          <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        </div>
      </section>
    </>
  );
};

export default Billing;
