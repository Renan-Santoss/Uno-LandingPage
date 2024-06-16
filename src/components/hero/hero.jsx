import styles from "./hero.module.css";
import caixaUno from "../../assets/img/Caixa.png"
import Button from '../button-1/button';
import ButtonBorder from "../buttonBorder/buttonBorder";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div>
          <h2 className={styles.heroH2}>
          <span className={styles.heroSpan}>UNO® minimalista,</span> representa uma excelente opção de presente para colecionadores!
          </h2>
          <p className={styles.heroP}>Esta edição especial do UNO®, o jogo de cartas adorado por todos, tem um visual totalmente exclusivo.</p>
          <div className={styles.flexBtn}>
            <Button>Saiba mais</Button>
            <ButtonBorder>Onde encontrar</ButtonBorder>
          </div>
        </div>
        <div className={styles.caixaWrapper}>
          <img src={caixaUno} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;