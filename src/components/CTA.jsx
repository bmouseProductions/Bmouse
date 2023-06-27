import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-left`}>
          Quer decolar o seu projeto?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
          Seus potenciais clientes já estão esperando pelo seu negócio, nós
          vamos trazê-los até você.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button
          text="Faça um orçamento"
          target="_blank"
          link="https://wa.me/5534997226999?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21"
        />
      </div>
    </section>
  );
};

export default CTA;
