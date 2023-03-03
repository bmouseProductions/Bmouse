import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A Bmouse Productions <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
        Somos uma agência de criatividade, criada por Tom Gonçalves e Roberta
        Almeida na “terra do rato”. A Disney é o lugar em que sonhos se tornam
        reais, e, talvez, por ter nascido lá, sejamos especialistas em emocionar
        tantas pessoas ao tornar realidade o que antes era inimaginável. A
        BMouse retorna ao Brasil revolucionando o tradicional recurso de contar
        histórias, mudando destinos e construindo o que vem depois do fim.
      </p>

      <Button
        styles={`mt-10`}
        text="Faça um orçamento"
        target="_blank"
        link="https://wa.me/5534997226999?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
      />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
