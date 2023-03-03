import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-left`}>
          A Bmouse Trabalha Em Cima De Projetos Com Início, Meio E Fim.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
          Canalizamos os objetivos propostos pelos nossos clientes e criamos um
          plano de médio a longo prazo, para conquistarmos as metas e
          concretizarmos a marca no seu mercado específico.
        </p>
        <Button
          styles="mt-10"
          text="Faça um orçamento"
          target="_blank"
          link="https://wa.me/5534997226999?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
        />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
